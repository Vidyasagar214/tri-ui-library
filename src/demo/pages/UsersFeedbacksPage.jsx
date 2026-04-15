import { useCallback, useEffect, useState } from "react";
import { fetchDemoFeedbacks } from "../feedbackStorage";

const STAR_COUNT = 5;

function StarRow({ rating }) {
  const n = Number(rating);
  const safe = Number.isFinite(n) ? Math.max(0, Math.min(STAR_COUNT, Math.round(n))) : 0;
  return (
    <div className="demo-feedbacks-table-stars" aria-label={`Rating ${safe} out of ${STAR_COUNT}`}>
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
        <div className="demo-feedbacks-table-wrap">
          <table className="demo-feedbacks-table">
            <colgroup>
              <col className="demo-feedbacks-col demo-feedbacks-col--id" />
              <col className="demo-feedbacks-col demo-feedbacks-col--email" />
              <col className="demo-feedbacks-col demo-feedbacks-col--date" />
              <col className="demo-feedbacks-col demo-feedbacks-col--rating" />
              <col className="demo-feedbacks-col demo-feedbacks-col--comment" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="demo-feedbacks-th demo-feedbacks-th--id">
                  ID
                </th>
                <th scope="col" className="demo-feedbacks-th demo-feedbacks-th--email">
                  Email
                </th>
                <th scope="col" className="demo-feedbacks-th demo-feedbacks-th--date">
                  Submitted
                </th>
                <th scope="col" className="demo-feedbacks-th demo-feedbacks-th--rating">
                  Rating
                </th>
                <th scope="col" className="demo-feedbacks-th demo-feedbacks-th--comment">
                  Comments
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((row, index) => {
                const rawComments = row.comments != null ? String(row.comments).trim() : "";
                const hasComments = rawComments.length > 0;
                return (
                  <tr key={row.id != null ? String(row.id) : `feedback-${index}`}>
                    <td className="demo-feedbacks-td demo-feedbacks-td--id">
                      <code className="demo-feedbacks-id-code">{row.id != null ? String(row.id) : "—"}</code>
                    </td>
                    <td className="demo-feedbacks-td demo-feedbacks-td--email">
                      {row.email != null && row.email !== "" ? (
                        <a href={`mailto:${row.email}`} className="demo-feedbacks-email-link">
                          {row.email}
                        </a>
                      ) : (
                        <span className="demo-feedbacks-muted">—</span>
                      )}
                    </td>
                    <td className="demo-feedbacks-td demo-feedbacks-td--date">
                      <time dateTime={row.savedAt}>{formatSavedAt(row.savedAt)}</time>
                    </td>
                    <td className="demo-feedbacks-td demo-feedbacks-td--rating">
                      <StarRow rating={row.rating} />
                    </td>
                    <td className="demo-feedbacks-td demo-feedbacks-td--comment">
                      {hasComments ? (
                        <span className="demo-feedbacks-comment-truncate" title={rawComments}>
                          {rawComments}
                        </span>
                      ) : (
                        <span className="demo-feedbacks-muted">No additional comments</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
