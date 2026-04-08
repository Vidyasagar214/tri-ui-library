import { useState, useEffect } from "react";
import { Dialog } from "../../index";
import { saveDemoFeedback } from "../feedbackStorage";

function ThumbUpIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThumbDownIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Navbar controls: two icon buttons that open the same feedback dialog.
 */
export function DemoFeedbackNavTriggers({ onOpen }) {
  return (
    <div className="demo-nav-feedback">
      <button
        type="button"
        className="demo-nav-feedback-btn demo-nav-feedback-btn--up"
        onClick={() => onOpen("up")}
        aria-label="Give positive feedback"
        title="Feedback"
      >
        <ThumbUpIcon className="demo-nav-feedback-icon" />
      </button>
      <button
        type="button"
        className="demo-nav-feedback-btn demo-nav-feedback-btn--down"
        onClick={() => onOpen("down")}
        aria-label="Give negative feedback"
        title="Feedback"
      >
        <ThumbDownIcon className="demo-nav-feedback-icon" />
      </button>
    </div>
  );
}

const STAR_COUNT = 5;

/**
 * Modal: star rating, user email, additional comments; saves via saveDemoFeedback.
 */
const TOAST_MS = 10_000;

function FeedbackToast({ toast }) {
  if (!toast) return null;
  return (
    <div
      className={`demo-feedback-toast demo-feedback-toast--${toast.type}`}
      role="alert"
      aria-live="assertive"
    >
      {toast.message}
    </div>
  );
}

export default function DemoFeedbackDialog({ open, onClose, initialSentiment, pagePath }) {
  const [rating, setRating] = useState(4);
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (open) {
      setRating(4);
      setEmail("");
      setComments("");
    }
  }, [open]);

  useEffect(() => {
    if (!toast) return undefined;
    const id = window.setTimeout(() => setToast(null), TOAST_MS);
    return () => window.clearTimeout(id);
  }, [toast]);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      showToast("error", "Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }
    const saved = saveDemoFeedback({
      sentiment: initialSentiment,
      rating,
      email: trimmed,
      comments: comments.trim(),
      pagePath: pagePath || (typeof window !== "undefined" ? window.location.pathname : ""),
    });
    if (!saved) {
      showToast("error", "We couldn’t save your feedback. Check browser storage settings and try again.");
      return;
    }
    onClose();
    showToast("success", "Thanks! Your feedback was submitted successfully.");
  };

  return (
    <>
    <Dialog open={open} onClose={onClose} title="Feedback" className="demo-feedback-dialog">
      <form className="demo-feedback-form" onSubmit={handleSubmit}>
        <div className="demo-feedback-stars-row">
          <div className="demo-feedback-stars" role="group" aria-label="Rating">
            {Array.from({ length: STAR_COUNT }, (_, i) => {
              const n = i + 1;
              const filled = n <= rating;
              return (
                <button
                  key={n}
                  type="button"
                  className={`demo-feedback-star ${filled ? "demo-feedback-star--filled" : ""}`}
                  onClick={() => setRating(n)}
                  aria-label={`${n} out of ${STAR_COUNT} stars`}
                >
                  <span aria-hidden>★</span>
                </button>
              );
            })}
          </div>
          <span className="demo-feedback-stars-label">{rating}/{STAR_COUNT} stars</span>
        </div>

        <label className="demo-feedback-label" htmlFor="demo-feedback-email">
          User email
        </label>
        <input
          id="demo-feedback-email"
          type="email"
          className="demo-feedback-input"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <label className="demo-feedback-label" htmlFor="demo-feedback-comments">
          Additional feedback
        </label>
        <textarea
          id="demo-feedback-comments"
          className="demo-feedback-textarea"
          rows={4}
          placeholder="Tell us what you think…"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <button type="submit" className="demo-feedback-submit">
          Submit feedback
        </button>
      </form>
    </Dialog>
    <FeedbackToast toast={toast} />
    </>
  );
}
