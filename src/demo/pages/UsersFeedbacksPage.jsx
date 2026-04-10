import { useCallback, useEffect, useState } from "react";
import { fetchDemoFeedbacks } from "../feedbackStorage";

const STAR_COUNT = 5;

function StarRow({ rating }) {
  const n = Number(rating);
  const safe = Number.isFinite(n) ? Math.max(0, Math.min(STAR_COUNT, Math.round(n))) : 0;
  return (
    <div className="demo-feedbacks-card-stars" aria-label={`Rating ${safe} out of ${STAR_COUNT}`}>
      {Array.from({ length: STAR_COUNT }, (_, i) => (
        <span
          key={i}
          className={`demo-feedbacks-star ${i < safe ? "demo-feedbacks-star--filled" : ""}`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );
}

function formatSavedAt(value) {
  if (value == null || value === "") return "—";
  const t = Date.parse(value);
  if (Number.isNaN(t)) return String(value);
  return new Date(t).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function UsersFeedbacksPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const result = await fetchDemoFeedbacks();
    if (!result.ok) {
      setError(result.error || "Could not load feedback.");
      setItems([]);
    } else {
      setItems(result.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="demo-feedbacks-page">
      <header className="demo-feedbacks-header">
        <div className="demo-feedbacks-header-row">
          <div>
            <h1 className="demo-feedbacks-title">User feedback</h1>
            <p className="demo-feedbacks-subtitle">
              Entries submitted from the demo feedback form (read-only view).
            </p>
          </div>
          <button type="button" className="demo-feedbacks-refresh" onClick={load} disabled={loading}>
            {loading ? "Loading…" : "Refresh"}
          </button>
        </div>
      </header>

      {error && (
        <div className="demo-feedbacks-banner demo-feedbacks-banner--error" role="alert">
          {error}
        </div>
      )}

      {loading && !error && items.length === 0 ? (
        <p className="demo-feedbacks-empty">Loading feedback…</p>
      ) : null}

      {!loading && !error && items.length === 0 ? (
        <p className="demo-feedbacks-empty">No feedback entries yet.</p>
      ) : null}

      {!loading && items.length > 0 ? (
        <ul className="demo-feedbacks-grid">
          {items.map((row, index) => (
            <li
              key={row.id != null ? String(row.id) : `feedback-${index}`}
              className="demo-feedbacks-card"
            >
              <div className="demo-feedbacks-card-top">
              <p className="demo-feedbacks-card-email">
                {row.email != null && row.email !== "" ? (
                  <a href={`mailto:${row.email}`} className="demo-feedbacks-card-email-link">
                    {row.email}
                  </a>
                ) : (
                  <span className="demo-feedbacks-card-muted">—</span>
                )}
              </p>
                <time className="demo-feedbacks-card-time" dateTime={row.savedAt}>
                  {formatSavedAt(row.savedAt)}
                </time>
              </div>
              <StarRow rating={row.rating} />
              <div className="demo-feedbacks-card-comments">
                <span className="demo-feedbacks-card-label">Comments:</span>
                {row.comments != null && String(row.comments).trim() !== "" ? (
                  <p className="demo-feedbacks-card-comments-body">{String(row.comments)}</p>
                ) : (
                  <p className="demo-feedbacks-card-muted">No additional comments</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
