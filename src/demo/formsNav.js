/**
 * Ordered “Forms” section on the Components home page (matches common docs IA).
 * IDs must match `componentsRegistry` entries.
 */
export const FORMS_NAV_LINKS = [
  { id: "form", label: "Overview" },
  { id: "input", label: "Form controls" },
  { id: "form-text", label: "Form text" },
  { id: "select", label: "Select" },
  { id: "checkbox", label: "Checks and radios" },
  { id: "range", label: "Range" },
  { id: "input-group", label: "Input Group" },
  { id: "floating-label", label: "Floating labels" },
  { id: "form-layout", label: "Layout" },
  { id: "form-feedback", label: "Validation" },
];

export const FORMS_SECTION_IDS = new Set(FORMS_NAV_LINKS.map((l) => l.id));
