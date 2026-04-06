/**
 * Docs page structure (React-Bootstrap–style TOC: Overview, Accessibility, Examples, API).
 */

/** Short a11y notes keyed by registry `id`; falls back to generic copy. */
const ACCESSIBILITY_BY_ID = {
  accordion:
    "Expand/collapse buttons should stay in tab order; pair with aria-expanded on triggers. Use heading markup for item titles when the accordion represents document structure.",
  "alert-dialog":
    "Alert dialogs trap focus and require a decision; ensure the primary action is clear and Escape/overlay policy matches your UX guidelines.",
  "dropdown-menu":
    "Implements menu semantics: role=\"menu\", menuitem buttons, Arrow/Home/End navigation, and Escape to close. Keep trigger aria-expanded in sync with open state.",
  dialog:
    "Modal pattern: focus should move inside when opened and restore on close; Escape closes. Provide an accessible name via title or aria-labelledby.",
  drawer:
    "Treat as a dialog or complementary region; ensure focus management when opening/closing and that the panel has an accessible name.",
  command:
    "Behaves like a combobox/dialog hybrid; ensure the input is labelled and listbox options are keyboard navigable.",
  combobox:
    "Listbox + input pairing should follow the ARIA combobox pattern; maintain aria-expanded and active descendant where applicable.",
  carousel:
    "Provide pause controls for auto-advancing carousels; announce slide changes for screen readers if content updates automatically.",
  "data-table":
    "Use <th scope=\"col\"> for headers; for sortable columns, expose sort state with aria-sort. Caption or aria-label helps describe the table.",
  "date-picker":
    "Calendar grids need grid/row/column roles or native date input fallbacks; ensure keyboard date selection is possible.",
  "input-otp":
    "Group fields with an accessible name; consider aria-label on the group describing the code length and purpose.",
  navbar:
    "Mobile menu toggle should have an accessible name; nav landmarks and current page indication (aria-current) improve orientation.",
  sidebar:
    "Use nav or complementary landmark; collapsed mode should still expose item labels via tooltips or aria-label when icons-only.",
  tabs: "Selected tab uses aria-selected; tablist, tab, and tabpanel roles associate labels with panels.",
  progress:
    "Uses role=\"progressbar\" with aria-valuenow/min/max. Pair with visible text when the value matters; use showLabel or adjacent copy.",
  spinner:
    "When indicating a loading state, pass a label prop so assistive technology announces status; otherwise the spinner is decorative (presentation).",
};

const GENERIC_A11Y =
  "Tri UI components use plain HTML and ARIA where appropriate. Test keyboard focus order, visible focus rings, and screen reader output in your own app context.";

/**
 * @param {{ id: string, name: string, accessibility?: string }} comp
 */
export function getAccessibilityBody(comp) {
  if (comp.accessibility) return comp.accessibility;
  return ACCESSIBILITY_BY_ID[comp.id] || `${GENERIC_A11Y} For ${comp.name}, follow WCAG guidance for the underlying patterns (buttons, forms, dialogs, etc.).`;
}

/**
 * @param {{ overview?: string, description: string }} comp
 */
export function getOverviewExtra(comp) {
  if (comp.overview) return comp.overview;
  return "The live examples below cover common variations—states, alignment, sizing, and composition—similar to what you see in established React component libraries.";
}

/**
 * Build “On this page” tree: Overview, Accessibility, Installation, Usage, Examples→children, API.
 */
export function buildOnThisPageNav(examples, hasApi) {
  const items = [
    { id: "overview", label: "Overview" },
    { id: "accessibility", label: "Accessibility" },
    { id: "installation", label: "Installation" },
    { id: "usage", label: "Usage" },
    {
      id: "examples",
      label: "Examples",
      children: (examples || []).map((ex) => ({
        id: `example-${ex.id}`,
        label: ex.title,
      })),
    },
  ];
  if (hasApi) {
    items.push({ id: "api-reference", label: "API Reference" });
  }
  return items;
}
