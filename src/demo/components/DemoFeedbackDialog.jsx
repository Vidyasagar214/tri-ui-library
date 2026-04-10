import { useState, useEffect } from "react";
import { Dialog } from "../../index";
import { submitDemoFeedback } from "../feedbackStorage";

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
 * Navbar control: one button with thumb-up and thumb-down icons (no gap); opens the feedback dialog.
 */
export function DemoFeedbackNavTriggers({ onOpen }) {
  return (
    <div className="demo-nav-feedback">
      <button
        type="button"
        className="demo-nav-feedback-btn"
        onClick={() => onOpen?.()}
        aria-label="Open feedback form"
        title="Feedback"
      >
        <ThumbUpIcon className="demo-nav-feedback-icon demo-nav-feedback-icon--up" />
        <ThumbDownIcon className="demo-nav-feedback-icon demo-nav-feedback-icon--down" />
      </button>
    </div>
  );
}

const STAR_COUNT = 5;

/**
 * Modal: star rating, user email, additional comments; submits to MockAPI via submitDemoFeedback.
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

export default function DemoFeedbackDialog({ open, onClose }) {
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setRating(0);
      setEmail("");
      setComments("");
      setIsSubmitting(false);
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

  const handleSubmit = async (e) => {
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
    setIsSubmitting(true);
    try {
      const result = await submitDemoFeedback({
        rating,
        email: trimmed,
        comments: comments.trim(),
      });
      if (!result.ok) {
        showToast(
          "error",
          result.error
            ? `We couldn’t send your feedback: ${result.error}`
            : "We couldn’t send your feedback. Please try again."
        );
        return;
      }
      onClose();
      showToast("success", "Thanks! Your feedback was submitted successfully.");
    } finally {
      setIsSubmitting(false);
    }
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
          <span className="demo-feedback-stars-label">
            {rating === 0 ? `No rating selected (0 / ${STAR_COUNT})` : `${rating} / ${STAR_COUNT} stars`}
          </span>
        </div>

        <label className="demo-feedback-label" htmlFor="demo-feedback-email">
          <span className="demo-feedback-label-text">User email</span>
          <span className="demo-feedback-required" aria-hidden="true">
            {" "}
            *
          </span>
        </label>
        <input
          id="demo-feedback-email"
          type="email"
          className="demo-feedback-input"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          aria-required="true"
        />

        <label className="demo-feedback-label" htmlFor="demo-feedback-comments">
          <span className="demo-feedback-label-text">Additional feedback</span>
          <span className="demo-feedback-optional"> (optional)</span>
        </label>
        <textarea
          id="demo-feedback-comments"
          className="demo-feedback-textarea"
          rows={4}
          placeholder="Tell us what you think…"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <button type="submit" className="demo-feedback-submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Submit feedback"}
        </button>
      </form>
    </Dialog>
    <FeedbackToast toast={toast} />
    </>
  );
}
