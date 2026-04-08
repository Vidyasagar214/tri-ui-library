const STORAGE_KEY = "tri-ui-library-demo-feedback";

/**
 * Persist feedback entries in localStorage (demo site only).
 * Inspect in DevTools → Application → Local Storage, or call `getDemoFeedbackLog()` in the console.
 */
export function saveDemoFeedback(entry) {
  try {
    const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const row = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      savedAt: new Date().toISOString(),
      ...entry,
    };
    prev.push(row);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
    return row;
  } catch {
    return null;
  }
}

export function getDemoFeedbackLog() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}
