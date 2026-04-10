const FEEDBACK_API_URL = "https://6295db8d810c00c1cb69856e.mockapi.io/feedback";

/**
 * GET all feedback rows from MockAPI (newest first by `savedAt` when present).
 * @returns {Promise<{ ok: true, data: object[] } | { ok: false, error: string }>}
 */
export async function fetchDemoFeedbacks() {
  try {
    const res = await fetch(FEEDBACK_API_URL);
    if (!res.ok) {
      const text = await res.text();
      return {
        ok: false,
        error: text?.trim()?.slice(0, 200) || `${res.status} ${res.statusText}`,
      };
    }
    const data = await res.json().catch(() => []);
    const list = Array.isArray(data) ? data : [];
    const sorted = [...list].sort((a, b) => {
      const ta = a?.savedAt ? Date.parse(a.savedAt) : 0;
      const tb = b?.savedAt ? Date.parse(b.savedAt) : 0;
      return tb - ta;
    });
    return { ok: true, data: sorted };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Network error";
    return { ok: false, error: message };
  }
}

/**
 * POST feedback to MockAPI (demo site only). Server assigns `id`.
 * Payload: savedAt, rating, email, comments (no client-sent id or sentiment).
 * @returns {Promise<{ ok: true, data: object } | { ok: false, error: string }>}
 */
export async function submitDemoFeedback({ rating, email, comments }) {
  const payload = {
    savedAt: new Date().toISOString(),
    rating,
    email,
    comments,
  };
  try {
    const res = await fetch(FEEDBACK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text();
      let detail = text?.trim() || `${res.status} ${res.statusText}`;
      try {
        const errBody = JSON.parse(text);
        if (errBody && typeof errBody === "object") {
          const msg = errBody.message ?? errBody.error;
          if (msg != null && String(msg).trim()) detail = String(msg).trim();
        }
      } catch {
        /* keep detail from text or status */
      }
      return { ok: false, error: detail.slice(0, 300) };
    }
    const data = await res.json().catch(() => ({}));
    return { ok: true, data };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Network error";
    return { ok: false, error: message };
  }
}
