import React, { useState } from "react";
import {
  Accordion,
  Alert,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  Carousel,
  Chart,
  Checkbox,
  Collapsible,
  Combobox,
  Command,
  ContextMenu,
  DashboardPage,
  DataTable,
  DatePicker,
  Dialog,
  Drawer,
  DropdownMenu,
  Empty,
  Field,
  HoverCard,
  Input,
  InputGroup,
  InputOTP,
  Navbar,
  NavLink,
  Progress,
  Sidebar,
  Spinner,
  Tabs,
} from "../index";

/* Simple SVG icons for Button demos (no icon library dependency) */
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const DashHomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const DashLayoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
);
const DashSettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
);
/** Demo-only: inline SVG as data URL for Navbar logoSrc examples */
const DEMO_NAVBAR_LOGO_SRC =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="%232563eb"/></svg>'
  );

/** Default installation snippet for any component */
const defaultInstall = `npm install tri-ui-library`;

/** Build usage snippet for a component */
function usageSnippet(name) {
  return `import { ${name} } from "tri-ui-library";
import "tri-ui-library/styles.css";`;
}

/**
 * Registry: each component has id, name, description, examples[], api[].
 * examples: { id, title, code, Demo }
 * api: { name, type, default, description }
 */
export const componentsRegistry = [
  {
    id: "accordion",
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `<Accordion
  items={[
    { title: "What are your shipping options?", content: "We offer standard and express shipping." },
    { title: "How can I track my order?", content: "Use the tracking link sent to your email." },
  ]}
/>`,
        Demo: () => (
          <Accordion
            items={[
              { title: "What are your shipping options?", content: "We offer standard and express shipping." },
              { title: "How can I track my order?", content: "Use the tracking link sent to your email." },
            ]}
          />
        ),
      },
      {
        id: "multiple",
        title: "Multiple",
        code: `<Accordion
  multiple
  items={[
    { title: "Section 1", content: "Content 1. Multiple panels can stay open." },
    { title: "Section 2", content: "Content 2." },
    { title: "Section 3", content: "Content 3." },
  ]}
/>`,
        Demo: () => (
          <Accordion
            multiple
            items={[
              { title: "Section 1", content: "Content 1. Multiple panels can stay open at once." },
              { title: "Section 2", content: "Content 2." },
              { title: "Section 3", content: "Content 3." },
            ]}
          />
        ),
      },
      {
        id: "disabled",
        title: "Disabled",
        code: `<Accordion
  disabled
  items={[
    { title: "Disabled accordion", content: "This entire accordion is disabled." },
  ]}
/>
<Accordion
  items={[
    { title: "Enabled", content: "This item is enabled." },
    { title: "This item is disabled", content: "Content.", disabled: true },
  ]}
/>`,
        Demo: () => (
          <div className="demo-stack">
            <Accordion
              disabled
              items={[{ title: "Disabled accordion", content: "This entire accordion is disabled." }]}
            />
            <Accordion
              items={[
                { title: "Enabled", content: "This item is enabled." },
                { title: "This item is disabled", content: "Content.", disabled: true },
              ]}
            />
          </div>
        ),
      },
      {
        id: "borders",
        title: "Borders",
        code: `<Accordion
  variant="borders"
  items={[
    { title: "Borders variant", content: "Uses a left border accent." },
  ]}
/>`,
        Demo: () => (
          <Accordion
            variant="borders"
            items={[
              { title: "Borders variant", content: "This variant uses a left border accent for each item." },
            ]}
          />
        ),
      },
      {
        id: "card",
        title: "Card",
        code: `<Accordion
  variant="card"
  items={[
    { title: "Card style item", content: "Each item looks like a card." },
  ]}
/>`,
        Demo: () => (
          <Accordion
            variant="card"
            items={[
              { title: "Card style item", content: "Each item is styled as a separate card with rounded corners." },
            ]}
          />
        ),
      },
    ],
    api: [
      { name: "items", type: "Array", default: "[]", description: "Array of { title, content, disabled? }" },
      { name: "multiple", type: "boolean", default: "false", description: "Allow multiple panels open at once" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the entire accordion" },
      { name: "variant", type: "'default' | 'borders' | 'card'", default: "'default'", description: "Visual variant" },
      { name: "className", type: "string", default: "''", description: "Additional CSS class" },
    ],
  },
  {
    id: "alert",
    name: "Alert",
    description: "Feedback messages for success, warning, error, or info.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `<Alert type="success">Saved successfully!</Alert>
<Alert type="warning">Please review your input.</Alert>
<Alert type="error">Something went wrong.</Alert>
<Alert type="info">Here is some information.</Alert>`,
        Demo: () => (
          <div className="demo-stack">
            <Alert type="success">Saved successfully!</Alert>
            <Alert type="warning">Please review your input.</Alert>
            <Alert type="error">Something went wrong.</Alert>
            <Alert type="info">Here is some information.</Alert>
          </div>
        ),
      },
      {
        id: "with-title",
        title: "With title",
        code: `<Alert type="warning" title="Warning">
  Please complete all required fields before submitting.
</Alert>`,
        Demo: () => (
          <Alert type="warning" title="Warning">
            Please complete all required fields before submitting.
          </Alert>
        ),
      },
      {
        id: "dismissible",
        title: "Dismissible",
        code: `<Alert type="info" dismissible onDismiss={() => console.log("dismissed")}>
  You can close this alert.
</Alert>`,
        Demo: () => (
          <Alert type="info" dismissible onDismiss={() => {}}>
            You can close this alert using the button.
          </Alert>
        ),
      },
    ],
    api: [
      { name: "type", type: "'success' | 'warning' | 'error' | 'info'", default: "'info'", description: "Alert type" },
      { name: "title", type: "ReactNode", default: "-", description: "Optional title" },
      { name: "dismissible", type: "boolean", default: "false", description: "Show close button" },
      { name: "onDismiss", type: "function", default: "-", description: "Called when dismissed" },
    ],
  },
  {
    id: "button",
    name: "Button",
    description: "Trigger actions. Variants and sizes supported.",
    examples: [
      {
        id: "basic",
        title: "Variants",
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="ghost">Ghost</Button>`,
        Demo: () => (
          <div className="demo-flex gap wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        ),
      },
      {
        id: "sizes",
        title: "Sizes",
        code: `<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`,
        Demo: () => (
          <div className="demo-flex gap">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        ),
      },
      {
        id: "disabled",
        title: "Disabled",
        code: `<Button variant="primary" disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>`,
        Demo: () => (
          <div className="demo-flex gap">
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled</Button>
          </div>
        ),
      },
      {
        id: "icons",
        title: "Icons",
        code: `// Left icon only - pass any React node (e.g. SVG or icon component)
<Button variant="primary" leftIcon={<YourIcon />}>Add</Button>

// Right icon only
<Button variant="secondary" rightIcon={<YourIcon />}>Next</Button>

// Both icons (left and right)
<Button variant="primary" leftIcon={<IconA />} rightIcon={<IconB />}>Save</Button>`,
        Demo: () => (
          <div className="demo-flex gap wrap">
            <Button variant="primary" leftIcon={<PlusIcon />}>Add</Button>
            <Button variant="secondary" rightIcon={<ArrowRightIcon />}>Next</Button>
            <Button variant="primary" leftIcon={<DownloadIcon />} rightIcon={<CheckIcon />}>Save</Button>
          </div>
        ),
      },
      {
        id: "loading",
        title: "Loading state (with Spinner)",
        code: `<Button variant="primary" disabled leftIcon={<Spinner size="sm" />}>
  Saving…
</Button>`,
        Demo: () => (
          <div className="demo-flex gap">
            <Button variant="primary" disabled leftIcon={<Spinner size="sm" label="Saving" />}>
              Saving…
            </Button>
          </div>
        ),
      },
    ],
    api: [
      { name: "variant", type: "'primary' | 'secondary' | 'danger' | 'ghost'", default: "'primary'", description: "Button style" },
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Button size" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable the button" },
      { name: "leftIcon", type: "ReactNode", default: "-", description: "Icon shown before the label" },
      { name: "rightIcon", type: "ReactNode", default: "-", description: "Icon shown after the label" },
    ],
  },
  {
    id: "input",
    name: "Input",
    description: "Text input with optional label and error state.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `<Input placeholder="Enter text" />
<Input type="email" placeholder="you@example.com" />`,
        Demo: () => (
          <div className="demo-stack">
            <Input placeholder="Enter text" />
            <Input type="email" placeholder="you@example.com" />
          </div>
        ),
      },
      {
        id: "with-label",
        title: "With label and error",
        code: `<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Password" error="Password is required" type="password" />`,
        Demo: () => (
          <div className="demo-stack">
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="Password" error="Password is required" type="password" />
          </div>
        ),
      },
      {
        id: "disabled",
        title: "Disabled",
        code: `<Input disabled placeholder="Disabled input" />
<Input label="Disabled" disabled value="Read only" />`,
        Demo: () => (
          <div className="demo-stack">
            <Input disabled placeholder="Disabled input" />
            <Input label="Disabled" disabled defaultValue="Read only" readOnly />
          </div>
        ),
      },
    ],
    api: [
      { name: "label", type: "string", default: "-", description: "Label text" },
      { name: "error", type: "string", default: "-", description: "Error message" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable input" },
    ],
  },
  {
    id: "card",
    name: "Card",
    description: "Content container with optional title and footer.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `<Card>
  <p>Simple card with no title or footer.</p>
</Card>`,
        Demo: () => (
          <Card>
            <p>Simple card with no title or footer.</p>
          </Card>
        ),
      },
      {
        id: "outlined",
        title: "Outlined",
        code: `<Card variant="outlined" title="Outlined card">
  <p>Default variant with border.</p>
</Card>`,
        Demo: () => (
          <Card variant="outlined" title="Outlined card">
            <p>Default variant with border.</p>
          </Card>
        ),
      },
      {
        id: "elevated",
        title: "Elevated",
        code: `<Card variant="elevated" title="Elevated card">
  <p>Uses shadow instead of border.</p>
</Card>`,
        Demo: () => (
          <Card variant="elevated" title="Elevated card">
            <p>Uses shadow instead of border.</p>
          </Card>
        ),
      },
      {
        id: "with-footer",
        title: "With header and footer",
        code: `<Card
  title="Card title"
  footer={<Button variant="primary">Action</Button>}
>
  <p>Body content goes here.</p>
</Card>`,
        Demo: () => (
          <Card
            title="Card title"
            footer={<Button variant="primary">Action</Button>}
          >
            <p>Body content goes here.</p>
          </Card>
        ),
      },
    ],
    api: [
      { name: "title", type: "ReactNode", default: "-", description: "Optional header title" },
      { name: "footer", type: "ReactNode", default: "-", description: "Optional footer content" },
      { name: "variant", type: "'outlined' | 'elevated'", default: "'outlined'", description: "Card style" },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Checkbox with optional label. Supports controlled and indeterminate state.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `const [checked, setChecked] = useState(false);
<Checkbox
  label="I agree to the terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>`,
        Demo: () => {
          const [checked, setChecked] = useState(false);
          return (
            <Checkbox
              label="I agree to the terms"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          );
        },
      },
      {
        id: "disabled",
        title: "Disabled",
        code: `<Checkbox label="Disabled unchecked" disabled />
<Checkbox label="Disabled checked" checked disabled />`,
        Demo: () => (
          <div className="demo-stack">
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" checked disabled />
          </div>
        ),
      },
      {
        id: "indeterminate",
        title: "Indeterminate",
        code: `<Checkbox
  label="Select all"
  indeterminate
  checked={false}
  onChange={() => {}}
/>`,
        Demo: () => (
          <Checkbox
            label="Select all (indeterminate state)"
            indeterminate
            checked={false}
            onChange={() => {}}
          />
        ),
      },
    ],
    api: [
      { name: "checked", type: "boolean", default: "false", description: "Checked state" },
      { name: "onChange", type: "function", default: "-", description: "Change handler" },
      { name: "label", type: "string", default: "-", description: "Label text" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable checkbox" },
      { name: "indeterminate", type: "boolean", default: "false", description: "Indeterminate state" },
    ],
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "Modal dialog with overlay. Use open and onClose for control.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `const [open, setOpen] = useState(false);
<Button onClick={() => setOpen(true)}>Open</Button>
<Dialog open={open} onClose={() => setOpen(false)} title="Dialog title">
  <p>Dialog content.</p>
</Dialog>`,
        Demo: () => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button variant="secondary" onClick={() => setOpen(true)}>Open Dialog</Button>
              <Dialog open={open} onClose={() => setOpen(false)} title="Dialog title">
                <p>Dialog content. Press Escape or click outside to close.</p>
              </Dialog>
            </>
          );
        },
      },
      {
        id: "with-footer",
        title: "With footer",
        code: `<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm"
  footer={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={() => setOpen(false)}>OK</Button>
    </>
  }
>
  <p>Confirm your action.</p>
</Dialog>`,
        Demo: () => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button variant="secondary" onClick={() => setOpen(true)}>Open with footer</Button>
              <Dialog
                open={open}
                onClose={() => setOpen(false)}
                title="Confirm"
                footer={
                  <>
                    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setOpen(false)}>OK</Button>
                  </>
                }
              >
                <p>Confirm your action.</p>
              </Dialog>
            </>
          );
        },
      },
    ],
    api: [
      { name: "open", type: "boolean", default: "-", description: "Whether dialog is open" },
      { name: "onClose", type: "function", default: "-", description: "Called when closing" },
      { name: "title", type: "string", default: "-", description: "Dialog title" },
      { name: "footer", type: "ReactNode", default: "-", description: "Optional footer (e.g. buttons)" },
    ],
  },
  {
    id: "dropdown-menu",
    name: "DropdownMenu",
    description:
      "Menu anchored to a trigger or split button. Supports alignment, drop direction, sizing, dark menus, section headers, dividers, active items, and full keyboard navigation (similar patterns to React-Bootstrap dropdowns).",
    examples: [
      {
        id: "basic",
        title: "Single-button dropdown",
        code: `<DropdownMenu
  trigger={<Button variant="secondary">Actions</Button>}
  items={[
    { label: "Edit", onClick: () => {} },
    { label: "Duplicate", onClick: () => {} },
    { label: "Delete", onClick: () => {} },
  ]}
/>`,
        Demo: () => (
          <DropdownMenu
            trigger={<Button variant="secondary">Actions</Button>}
            items={[
              { label: "Edit", onClick: () => {} },
              { label: "Duplicate", onClick: () => {} },
              { label: "Delete", onClick: () => {} },
            ]}
          />
        ),
      },
      {
        id: "split",
        title: "Split button dropdown",
        code: `<DropdownMenu
  split
  primaryLabel="Save"
  onPrimaryClick={() => {}}
  items={[
    { label: "Save as draft", onClick: () => {} },
    { label: "Save and publish", onClick: () => {} },
  ]}
/>`,
        Demo: () => (
          <DropdownMenu
            split
            primaryLabel="Save"
            onPrimaryClick={() => {}}
            items={[
              { label: "Save as draft", onClick: () => {} },
              { label: "Save and publish", onClick: () => {} },
            ]}
          />
        ),
      },
      {
        id: "sizing",
        title: "Menu sizing",
        code: `<DropdownMenu size="sm" trigger={<Button size="sm" variant="secondary">Small</Button>} items={[...]} />
<DropdownMenu size="lg" trigger={<Button size="lg" variant="secondary">Large</Button>} items={[...]} />`,
        Demo: () => (
          <div className="demo-flex gap wrap">
            <DropdownMenu
              size="sm"
              trigger={<Button size="sm" variant="secondary">Small menu</Button>}
              items={[{ label: "Item", onClick: () => {} }]}
            />
            <DropdownMenu
              size="lg"
              trigger={<Button size="lg" variant="secondary">Large menu</Button>}
              items={[{ label: "Item", onClick: () => {} }]}
            />
          </div>
        ),
      },
      {
        id: "dark",
        title: "Dark menu",
        code: `<DropdownMenu
  variant="dark"
  trigger={<Button variant="secondary">Dark</Button>}
  items={[{ label: "Profile", onClick: () => {} }]}
/>`,
        Demo: () => (
          <DropdownMenu
            variant="dark"
            trigger={<Button variant="secondary">Dark menu</Button>}
            items={[
              { label: "Profile", onClick: () => {} },
              { label: "Settings", onClick: () => {} },
            ]}
          />
        ),
      },
      {
        id: "placement",
        title: "Drop direction (placement)",
        code: `<DropdownMenu placement="top-start" trigger={...} items={...} />
<DropdownMenu placement="bottom-end" trigger={...} items={...} />`,
        Demo: () => (
          <div className="demo-flex gap wrap" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <DropdownMenu
              placement="top-end"
              trigger={<Button variant="secondary">Opens upward</Button>}
              items={[{ label: "Item", onClick: () => {} }]}
            />
            <DropdownMenu
              placement="bottom-start"
              trigger={<Button variant="secondary">Bottom start</Button>}
              items={[{ label: "Item", onClick: () => {} }]}
            />
          </div>
        ),
      },
      {
        id: "align",
        title: "Menu alignment (start / end)",
        code: `<DropdownMenu align="end" trigger={...} items={...} />
<DropdownMenu align="start" trigger={...} items={...} />`,
        Demo: () => (
          <div className="demo-flex gap">
            <DropdownMenu
              trigger={<Button variant="secondary">Align end</Button>}
              items={[{ label: "Item", onClick: () => {} }]}
              align="end"
            />
            <DropdownMenu
              trigger={<Button variant="secondary">Align start</Button>}
              items={[{ label: "Item", onClick: () => {} }]}
              align="start"
            />
          </div>
        ),
      },
      {
        id: "headers-dividers",
        title: "Headers, dividers, active & disabled items",
        code: `<DropdownMenu
  trigger={<Button variant="secondary">Account</Button>}
  items={[
    { type: "header", label: "Signed in as you@example.com" },
    { label: "Profile", onClick: () => {}, active: true },
    { type: "divider" },
    { label: "Sign out", onClick: () => {} },
    { label: "Disabled", disabled: true },
  ]}
/>`,
        Demo: () => (
          <DropdownMenu
            trigger={<Button variant="secondary">Account</Button>}
            items={[
              { type: "header", label: "Signed in as you@example.com" },
              { label: "Profile", onClick: () => {}, active: true },
              { type: "divider" },
              { label: "Sign out", onClick: () => {} },
              { label: "Disabled", disabled: true },
            ]}
          />
        ),
      },
      {
        id: "disabled-item",
        title: "Disabled item (simple)",
        code: `<DropdownMenu
  trigger={<Button variant="secondary">Menu</Button>}
  items={[
    { label: "Enabled", onClick: () => {} },
    { label: "Disabled", onClick: () => {}, disabled: true },
  ]}
/>`,
        Demo: () => (
          <DropdownMenu
            trigger={<Button variant="secondary">Menu</Button>}
            items={[
              { label: "Enabled", onClick: () => {} },
              { label: "Disabled", onClick: () => {}, disabled: true },
            ]}
          />
        ),
      },
    ],
    api: [
      { name: "trigger", type: "ReactNode", default: "-", description: "Element that opens the menu (not used when split=true)" },
      {
        name: "items",
        type: "Array",
        default: "[]",
        description:
          "Actions: { label, onClick?, disabled?, active? }; section header: { type: 'header', label }; divider: { type: 'divider' }",
      },
      { name: "align", type: "'start' | 'end'", default: "'end'", description: "Horizontal alignment when placement is not set" },
      {
        name: "placement",
        type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",
        default: "-",
        description: "Menu position relative to trigger (overrides align-based default)",
      },
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Menu (and item) density" },
      { name: "variant", type: "'default' | 'dark'", default: "'default'", description: "Menu surface style" },
      { name: "split", type: "boolean", default: "false", description: "Split button: primary + caret menu" },
      { name: "primaryLabel", type: "ReactNode", default: "'Action'", description: "Left segment label when split" },
      { name: "onPrimaryClick", type: "function", default: "-", description: "Left button handler when split" },
      { name: "splitButtonSize", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Size of split controls" },
      { name: "className", type: "string", default: "''", description: "Class on root" },
    ],
  },
  {
    id: "data-table",
    name: "DataTable",
    description: "Table built from columns and data arrays.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `<DataTable
  columns={[
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
  ]}
  data={[
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
  ]}
/>`,
        Demo: () => (
          <DataTable
            columns={[
              { key: "name", header: "Name" },
              { key: "email", header: "Email" },
              { key: "role", header: "Role" },
            ]}
            data={[
              { name: "Alice", email: "alice@example.com", role: "Admin" },
              { name: "Bob", email: "bob@example.com", role: "User" },
            ]}
          />
        ),
      },
      {
        id: "empty",
        title: "Empty state",
        code: `<DataTable
  columns={[{ key: "name", header: "Name" }]}
  data={[]}
  emptyMessage="No data yet"
/>`,
        Demo: () => (
          <DataTable
            columns={[{ key: "name", header: "Name" }]}
            data={[]}
            emptyMessage="No data yet"
          />
        ),
      },
    ],
    api: [
      { name: "columns", type: "Array<{key, header}>", default: "[]", description: "Column definitions" },
      { name: "data", type: "Array<object>", default: "[]", description: "Row data" },
      { name: "emptyMessage", type: "string", default: "'No data'", description: "Message when data is empty" },
    ],
  },
  // --- Remaining components: single "Basic" example each ---
  {
    id: "alert-dialog",
    name: "AlertDialog",
    description: "Modal confirmation dialog with confirm and cancel actions.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `const [open, setOpen] = useState(false);
<AlertDialog open={open} onClose={() => setOpen(false)} title="Delete?" description="Cannot be undone." confirmLabel="Delete" onConfirm={() => setOpen(false)} />`,
        Demo: () => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button variant="secondary" onClick={() => setOpen(true)}>Open AlertDialog</Button>
              <AlertDialog open={open} onClose={() => setOpen(false)} title="Delete?" description="Cannot be undone." confirmLabel="Delete" onConfirm={() => setOpen(false)} />
            </>
          );
        },
      },
    ],
    api: [],
  },
  {
    id: "aspect-ratio",
    name: "AspectRatio",
    description: "Container that enforces an aspect ratio.",
    examples: [
      { id: "basic", title: "Basic", code: `<AspectRatio ratio={16/9}><img src="..." alt="Example" /></AspectRatio>`, Demo: () => <AspectRatio ratio={16/9}><div className="demo-slide">16 : 9</div></AspectRatio> },
    ],
    api: [],
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "User avatar with image or fallback. Sizes: sm, md, lg.",
    examples: [
      { id: "basic", title: "Basic", code: `<Avatar alt="Jane" fallback="JD" />\n<Avatar size="lg" fallback="A" />`, Demo: () => <div className="demo-flex gap"><Avatar alt="Jane" fallback="JD" /><Avatar size="lg" fallback="A" /></div> },
    ],
    api: [],
  },
  {
    id: "badge",
    name: "Badge",
    description: "Label or tag. Variants: default, primary, danger.",
    examples: [
      { id: "basic", title: "Basic", code: `<Badge>Default</Badge>\n<Badge variant="primary">New</Badge>`, Demo: () => <div className="demo-flex gap"><Badge>Default</Badge><Badge variant="primary">New</Badge></div> },
    ],
    api: [],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    description: "Navigation path. Items: label and optional href.",
    examples: [
      { id: "basic", title: "Basic", code: `<Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Current" }]} />`, Demo: () => <Breadcrumb items={[{ label: "Home", href: "#" }, { label: "Current" }]} /> },
    ],
    api: [],
  },
  {
    id: "button-group",
    name: "ButtonGroup",
    description: "Group buttons with no gap.",
    examples: [
      { id: "basic", title: "Basic", code: `<ButtonGroup><Button variant="secondary">One</Button><Button variant="secondary">Two</Button></ButtonGroup>`, Demo: () => <ButtonGroup><Button variant="secondary">One</Button><Button variant="secondary">Two</Button></ButtonGroup> },
    ],
    api: [],
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Month calendar. value (Date) and onChange.",
    examples: [
      { id: "basic", title: "Basic", code: `const [date, setDate] = useState(new Date());\n<Calendar value={date} onChange={setDate} />`, Demo: () => { const [d, setD] = useState(new Date()); return <Calendar value={d} onChange={setD} />; } },
    ],
    api: [],
  },
  {
    id: "carousel",
    name: "Carousel",
    description: "Horizontal sliding content with dots.",
    examples: [
      { id: "basic", title: "Basic", code: `<Carousel><div>Slide 1</div><div>Slide 2</div></Carousel>`, Demo: () => <Carousel><div className="demo-slide">Slide 1</div><div className="demo-slide">Slide 2</div></Carousel> },
    ],
    api: [],
  },
  {
    id: "chart",
    name: "Chart",
    description: "Simple bar chart. Data: [{ label, value }].",
    examples: [
      { id: "basic", title: "Basic", code: `<Chart data={[{ label: "Jan", value: 40 }, { label: "Feb", value: 65 }]} />`, Demo: () => <Chart data={[{ label: "Jan", value: 40 }, { label: "Feb", value: 65 }, { label: "Mar", value: 50 }]} /> },
    ],
    api: [],
  },
  {
    id: "collapsible",
    name: "Collapsible",
    description: "Toggle content visibility.",
    examples: [
      { id: "basic", title: "Basic", code: `<Collapsible trigger="Click to expand">Hidden content</Collapsible>`, Demo: () => <Collapsible trigger="Click to expand"><p>Hidden content</p></Collapsible> },
    ],
    api: [],
  },
  {
    id: "combobox",
    name: "Combobox",
    description: "Searchable select. options: [{ label, value }].",
    examples: [
      { id: "basic", title: "Basic", code: `const [v, setV] = useState("");\n<Combobox options={[{ label: "Apple", value: "apple" }]} value={v} onChange={setV} />`, Demo: () => { const [v, setV] = useState(""); return <Combobox options={[{ label: "Apple", value: "apple" }, { label: "Banana", value: "banana" }]} value={v} onChange={setV} placeholder="Select" />; } },
    ],
    api: [],
  },
  {
    id: "command",
    name: "Command",
    description: "Command palette with search input.",
    examples: [
      { id: "basic", title: "Basic", code: `<Command placeholder="Search...">Results</Command>`, Demo: () => <Command placeholder="Search..."><div style={{ padding: "var(--ui-spacing-md)" }}>Results</div></Command> },
    ],
    api: [],
  },
  {
    id: "context-menu",
    name: "ContextMenu",
    description: "Right-click menu. Wrap content and pass items.",
    examples: [
      { id: "basic", title: "Basic", code: `<ContextMenu items={[{ label: "Copy", onClick: () => {} }]}><div>Right-click</div></ContextMenu>`, Demo: () => <ContextMenu items={[{ label: "Copy", onClick: () => {} }]}><div className="demo-context-area">Right-click</div></ContextMenu> },
    ],
    api: [],
  },
  {
    id: "date-picker",
    name: "DatePicker",
    description: "Input that opens a calendar.",
    examples: [
      { id: "basic", title: "Basic", code: `const [date, setDate] = useState(null);\n<DatePicker value={date} onChange={setDate} />`, Demo: () => { const [d, setD] = useState(null); return <DatePicker value={d} onChange={setD} placeholder="Select date" />; } },
    ],
    api: [],
  },
  {
    id: "dashboard-page",
    name: "DashboardPage",
    description: "Dashboard shell: optional Navbar, Sidebar (header + collapse on one row), and scrollable main. Composes with Card, DataTable, and other content.",
    examples: [
      {
        id: "full",
        title: "Full layout",
        code: `const [collapsed, setCollapsed] = useState(false);
<DashboardPage
  sidebarCollapsed={collapsed}
  navbar={
    <Navbar
      brand={<strong>Acme</strong>}
      nav={<div className="demo-navbar-nav-wrap">...</div>}
      actions={<Button variant="ghost" size="sm">Profile</Button>}
      variant="default"
    />
  }
  sidebar={
    <Sidebar
      header={<span>Menu</span>}
      collapsed={collapsed}
      onToggleCollapse={setCollapsed}
      items={[...]}
      variant="default"
    />
  }
>
  <Card title="Overview">...</Card>
</DashboardPage>`,
        Demo: () => {
          const [collapsed, setCollapsed] = useState(false);
          const [active, setActive] = useState("home");
          const sidebarItems = [
            { id: "home", label: "Home", icon: <DashHomeIcon />, active: active === "home", onClick: () => setActive("home") },
            { id: "projects", label: "Projects", icon: <DashLayoutIcon />, active: active === "projects", onClick: () => setActive("projects") },
            { id: "settings", label: "Settings", icon: <DashSettingsIcon />, active: active === "settings", onClick: () => setActive("settings") },
          ];
          return (
            <div className="demo-dashboard-preview">
              <DashboardPage
                sidebarCollapsed={collapsed}
                navbar={
                  <Navbar
                    logoSrc={DEMO_NAVBAR_LOGO_SRC}
                    logoAlt=""
                    brand={<strong style={{ fontSize: "var(--ui-font-size-lg)" }}>Acme</strong>}
                    nav={(
                      <div className="demo-navbar-nav-wrap">
                        <NavLink href="#" active={active === "home"} onClick={(e) => { e.preventDefault(); setActive("home"); }}>Home</NavLink>
                        <NavLink href="#" active={active === "projects"} onClick={(e) => { e.preventDefault(); setActive("projects"); }}>Projects</NavLink>
                      </div>
                    )}
                    actions={<Button variant="ghost" size="sm">Profile</Button>}
                    variant="default"
                  />
                }
                sidebar={(
                  <Sidebar
                    header={<span style={{ fontWeight: 600 }}>Menu</span>}
                    collapsed={collapsed}
                    onToggleCollapse={setCollapsed}
                    items={sidebarItems}
                    variant="default"
                    width="normal"
                  />
                )}
              >
                <Card title="Overview">
                  <p style={{ marginBottom: "var(--ui-spacing-md)", color: "var(--ui-muted-foreground)" }}>
                    Active section: <strong>{active}</strong>. Sidebar collapsed: <strong>{String(collapsed)}</strong>.
                  </p>
                  <DataTable
                    columns={[
                      { key: "task", header: "Task" },
                      { key: "status", header: "Status" },
                    ]}
                    data={[
                      { task: "Design review", status: "Done" },
                      { task: "API integration", status: "In progress" },
                    ]}
                  />
                </Card>
              </DashboardPage>
            </div>
          );
        },
      },
      {
        id: "navbar-only",
        title: "Navbar only",
        code: `<DashboardPage
  navbar={<Navbar brand={<span>App</span>} nav={...} actions={<Button size="sm">Sign in</Button>} />}
>
  <p>Main content without sidebar.</p>
</DashboardPage>`,
        Demo: () => (
          <div className="demo-dashboard-preview">
            <DashboardPage
              navbar={(
                <Navbar
                  logoSrc={DEMO_NAVBAR_LOGO_SRC}
                  logoAlt=""
                  brand={<strong>App</strong>}
                  nav={(
                    <div className="demo-navbar-nav-wrap">
                      <NavLink href="#" active>Docs</NavLink>
                      <NavLink href="#">Pricing</NavLink>
                    </div>
                  )}
                  actions={<Button variant="primary" size="sm">Sign in</Button>}
                  variant="bordered"
                />
              )}
            >
              <Card><p>Content area when no sidebar is passed.</p></Card>
            </DashboardPage>
          </div>
        ),
      },
      {
        id: "contained-main",
        title: "Contained main width",
        code: `<DashboardPage mainWidth="contained" navbar={...} sidebar={...}>
  <Card>Content is centered with max-width.</Card>
</DashboardPage>`,
        Demo: () => {
          const [c, setC] = useState(false);
          return (
            <div className="demo-dashboard-preview">
              <DashboardPage
                mainWidth="contained"
                sidebarCollapsed={c}
                navbar={(
                  <Navbar logoSrc={DEMO_NAVBAR_LOGO_SRC} logoAlt="" brand={<strong>Studio</strong>} nav={<div className="demo-navbar-nav-wrap"><NavLink href="#" active>Dashboard</NavLink></div>} actions={<Button variant="ghost" size="sm">User</Button>} variant="transparent" />
                )}
                sidebar={(
                  <Sidebar collapsed={c} onToggleCollapse={setC} showCollapseButton items={[{ id: "a", label: "Item", active: true, onClick: () => {} }]} variant="minimal" />
                )}
              >
                <Card><p>Main uses contained max-width for readable line length.</p></Card>
              </DashboardPage>
            </div>
          );
        },
      },
    ],
    api: [
      { name: "navbar", type: "ReactNode", default: "-", description: "Top bar slot" },
      { name: "sidebar", type: "ReactNode", default: "-", description: "Side rail slot" },
      { name: "children", type: "ReactNode", default: "-", description: "Main content" },
      { name: "sidebarCollapsed", type: "boolean", default: "false", description: "Layout modifier when sidebar is collapsed" },
      { name: "mainWidth", type: "'fluid' | 'contained'", default: "'fluid'", description: "Main content width" },
      { name: "fullHeight", type: "boolean", default: "true", description: "min-height: 100vh" },
    ],
  },
  {
    id: "nav-link",
    name: "NavLink",
    description: "Navigation link for menus: anchor when href is set, otherwise button. Use inside Navbar or Sidebar.",
    examples: [
      {
        id: "basic",
        title: "Basic",
        code: `<NavLink href="/dashboard">Dashboard</NavLink>
<NavLink href="/settings">Settings</NavLink>`,
        Demo: () => (
          <div className="demo-stack" style={{ maxWidth: "12rem" }}>
            <NavLink href="#">Dashboard</NavLink>
            <NavLink href="#">Settings</NavLink>
          </div>
        ),
      },
      {
        id: "active-disabled",
        title: "Active and disabled",
        code: `<NavLink active>Current page</NavLink>
<NavLink disabled>Unavailable</NavLink>`,
        Demo: () => (
          <div className="demo-stack" style={{ maxWidth: "12rem" }}>
            <NavLink active>Current page</NavLink>
            <NavLink disabled>Unavailable</NavLink>
          </div>
        ),
      },
      {
        id: "with-icon",
        title: "With icon",
        code: `<NavLink href="#" icon={<HomeIcon />}>Home</NavLink>`,
        Demo: () => (
          <div className="demo-stack" style={{ maxWidth: "12rem" }}>
            <NavLink href="#" icon={<DashHomeIcon />}>Home</NavLink>
            <NavLink href="#" icon={<DashSettingsIcon />}>Settings</NavLink>
          </div>
        ),
      },
    ],
    api: [
      { name: "href", type: "string", default: "-", description: "If set, renders <a>" },
      { name: "onClick", type: "function", default: "-", description: "Click handler" },
      { name: "active", type: "boolean", default: "false", description: "Active / current item style" },
      { name: "disabled", type: "boolean", default: "false", description: "Disabled state" },
      { name: "icon", type: "ReactNode", default: "-", description: "Leading icon" },
    ],
  },
  {
    id: "navbar",
    name: "Navbar",
    description: "Top bar with brand, navigation, and actions. Use logoSrc or logo for an image; logoPlaceholder for a dashed slot; brandMark for a gradient square when you have no asset yet.",
    examples: [
      {
        id: "default",
        title: "Default (logo image)",
        code: `<Navbar
  logoSrc="/logo.png"
  logoAlt="My company"
  brand={<strong>My App</strong>}
  nav={
    <div className="demo-navbar-nav-wrap">
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">Docs</NavLink>
    </div>
  }
  actions={<Button variant="primary" size="sm">Get started</Button>}
/>`,
        Demo: () => (
          <Navbar
            logoSrc={DEMO_NAVBAR_LOGO_SRC}
            logoAlt=""
            brand={<strong>My App</strong>}
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Docs</NavLink>
              </div>
            )}
            actions={<Button variant="primary" size="sm">Get started</Button>}
            variant="default"
          />
        ),
      },
      {
        id: "logo-placeholder",
        title: "Logo placeholder",
        code: `<Navbar
  logoPlaceholder
  brand={<strong>My App</strong>}
  nav={...}
/>
{/* Then switch to logoSrc="/logo.svg" logoAlt="App" when ready */}`,
        Demo: () => (
          <Navbar
            logoPlaceholder
            brand={<strong>My App</strong>}
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Docs</NavLink>
              </div>
            )}
            actions={<Button variant="ghost" size="sm">Sign in</Button>}
          />
        ),
      },
      {
        id: "gradient-mark",
        title: "Gradient mark (no image)",
        code: `<Navbar brandMark brand={<strong>My App</strong>} nav={...} />`,
        Demo: () => (
          <Navbar
            brandMark
            brand={<strong>My App</strong>}
            nav={(
              <div className="demo-navbar-nav-wrap">
                <NavLink href="#">Home</NavLink>
              </div>
            )}
          />
        ),
      },
      {
        id: "variants",
        title: "Variants",
        code: `<Navbar variant="bordered" ... />
<Navbar variant="transparent" ... />`,
        Demo: () => (
          <div className="demo-stack">
            <Navbar
              brand={<span>Bordered</span>}
              nav={<div className="demo-navbar-nav-wrap"><NavLink href="#">Link</NavLink></div>}
              variant="bordered"
            />
            <Navbar
              brand={<span>Transparent</span>}
              nav={<div className="demo-navbar-nav-wrap"><NavLink href="#">Link</NavLink></div>}
              variant="transparent"
            />
          </div>
        ),
      },
      {
        id: "sticky-dense",
        title: "Sticky and dense",
        code: `<Navbar sticky dense brand={...} nav={...} />`,
        Demo: () => (
          <Navbar
            brandMark
            sticky
            dense
            brand={<strong>Dense</strong>}
            nav={<div className="demo-navbar-nav-wrap"><NavLink href="#" active>Tab</NavLink></div>}
            actions={<Button variant="ghost" size="sm">Menu</Button>}
          />
        ),
      },
      {
        id: "controlled-mobile",
        title: "Controlled mobile menu",
        code: `const [open, setOpen] = useState(false);
<Navbar
  mobileMenuOpen={open}
  onMobileMenuChange={setOpen}
  brand={...}
  nav={...}
/>`,
        Demo: () => {
          const [open, setOpen] = useState(false);
          return (
            <div>
              <p style={{ fontSize: "var(--ui-font-size-sm)", color: "var(--ui-muted-foreground)", marginBottom: "var(--ui-spacing-sm)" }}>
                Resize below 768px or use the menu button. Open state: {String(open)}
              </p>
              <Navbar
                brandMark
                mobileMenuOpen={open}
                onMobileMenuChange={setOpen}
                brand={<strong>Controlled</strong>}
                nav={(
                  <div className="demo-navbar-nav-wrap">
                    <NavLink href="#" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink href="#" onClick={() => setOpen(false)}>About</NavLink>
                  </div>
                )}
              />
            </div>
          );
        },
      },
    ],
    api: [
      { name: "brand", type: "ReactNode", default: "-", description: "App name / text beside the logo" },
      { name: "logoSrc", type: "string", default: "-", description: "Image URL for logo (<img>)" },
      { name: "logoAlt", type: "string", default: "''", description: "Alt text for logoSrc" },
      { name: "logo", type: "ReactNode", default: "-", description: "Custom logo node (overrides logoSrc)" },
      { name: "logoPlaceholder", type: "boolean", default: "false", description: "Dashed box when no logo yet" },
      { name: "brandMark", type: "boolean", default: "false", description: "Gradient square if no logo / placeholder" },
      { name: "nav", type: "ReactNode", default: "-", description: "Primary navigation" },
      { name: "actions", type: "ReactNode", default: "-", description: "Right actions" },
      { name: "variant", type: "'default' | 'bordered' | 'transparent'", default: "'default'", description: "Visual style" },
      { name: "sticky", type: "boolean", default: "false", description: "Stick to viewport top" },
      { name: "dense", type: "boolean", default: "false", description: "Compact padding" },
      { name: "mobileMenuOpen", type: "boolean", default: "-", description: "Controlled mobile panel" },
      { name: "onMobileMenuChange", type: "function", default: "-", description: "(open: boolean) => void" },
    ],
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description: "Vertical navigation with variants and item list. App name (header) and expand/collapse control sit on one row—title left, toggle right.",
    examples: [
      {
        id: "default",
        title: "Default with collapse",
        code: `const [collapsed, setCollapsed] = useState(false);
<Sidebar
  header={<span>App</span>}
  collapsed={collapsed}
  onToggleCollapse={setCollapsed}
  showCollapseButton
  items={[
    { id: "1", label: "Home", icon: <Icon />, active: true, onClick: () => {} },
  ]}
/>`,
        Demo: () => {
          const [collapsed, setCollapsed] = useState(false);
          const [active, setActive] = useState("home");
          return (
            <div style={{ height: "16rem", display: "flex" }}>
              <Sidebar
                header={<span style={{ fontWeight: 600 }}>App</span>}
                collapsed={collapsed}
                onToggleCollapse={setCollapsed}
                showCollapseButton
                items={[
                  { id: "home", label: "Home", icon: <DashHomeIcon />, active: active === "home", onClick: () => setActive("home") },
                  { id: "proj", label: "Projects", icon: <DashLayoutIcon />, active: active === "proj", onClick: () => setActive("proj") },
                ]}
                variant="default"
              />
              <div style={{ flex: 1, padding: "var(--ui-spacing-lg)", background: "var(--ui-muted)" }}>
                Selected: <strong>{active}</strong>
              </div>
            </div>
          );
        },
      },
      {
        id: "variants",
        title: "Variants",
        code: `<Sidebar variant="accent" items={...} />
<Sidebar variant="minimal" items={...} />`,
        Demo: () => (
          <div className="demo-stack">
            <div style={{ height: "10rem", display: "flex" }}>
              <Sidebar
                showCollapseButton={false}
                items={[{ id: "a", label: "Dashboard", active: true, onClick: () => {} }]}
                variant="accent"
              />
            </div>
            <div style={{ height: "10rem", display: "flex" }}>
              <Sidebar
                showCollapseButton={false}
                items={[{ id: "b", label: "Reports", onClick: () => {} }]}
                variant="minimal"
              />
            </div>
          </div>
        ),
      },
      {
        id: "position-width",
        title: "Position and width",
        code: `<Sidebar position="right" width="wide" items={...} />`,
        Demo: () => (
          <div style={{ height: "12rem", display: "flex", flexDirection: "row-reverse" }}>
            <Sidebar
              position="right"
              width="wide"
              showCollapseButton={false}
              items={[
                { id: "x", label: "Wide right rail", active: true, onClick: () => {} },
              ]}
            />
            <div style={{ flex: 1, padding: "var(--ui-spacing-md)", background: "var(--ui-muted)" }}>Main</div>
          </div>
        ),
      },
      {
        id: "footer",
        title: "With footer",
        code: `<Sidebar
  items={...}
  footer={<Button variant="ghost" size="sm">Sign out</Button>}
/>`,
        Demo: () => (
          <div style={{ height: "14rem", display: "flex" }}>
            <Sidebar
              showCollapseButton={false}
              items={[{ id: "1", label: "Account", active: true, onClick: () => {} }]}
              footer={<Button variant="ghost" size="sm">Sign out</Button>}
            />
          </div>
        ),
      },
    ],
    api: [
      { name: "items", type: "Array", default: "[]", description: "{ id?, label, icon?, href?, active?, disabled?, onClick? }" },
      { name: "header", type: "ReactNode", default: "-", description: "App name / logo (left side of top row with collapse)" },
      { name: "footer", type: "ReactNode", default: "-", description: "Bottom slot" },
      { name: "collapsed", type: "boolean", default: "false", description: "Icon-only rail" },
      { name: "onToggleCollapse", type: "function", default: "-", description: "(nextCollapsed: boolean) => void" },
      { name: "showCollapseButton", type: "boolean", default: "true", description: "Show collapse toggle on the right of the header row" },
      { name: "position", type: "'left' | 'right'", default: "'left'", description: "Side of layout" },
      { name: "variant", type: "'default' | 'accent' | 'minimal'", default: "'default'", description: "Visual style" },
      { name: "width", type: "'normal' | 'wide'", default: "'normal'", description: "Expanded width" },
    ],
  },
  {
    id: "drawer",
    name: "Drawer",
    description: "Side panel. open, onClose, title, side (left|right).",
    examples: [
      { id: "basic", title: "Basic", code: `const [open, setOpen] = useState(false);\n<Drawer open={open} onClose={() => setOpen(false)} title="Drawer">Content</Drawer>`, Demo: () => { const [o, setO] = useState(false); return <><Button variant="secondary" onClick={() => setO(true)}>Open</Button><Drawer open={o} onClose={() => setO(false)} title="Drawer"><p>Content</p></Drawer></>; } },
    ],
    api: [],
  },
  {
    id: "empty",
    name: "Empty",
    description: "Empty state. title, description, children.",
    examples: [
      { id: "basic", title: "Basic", code: `<Empty title="No items" description="Add your first item."><Button variant="primary">Add</Button></Empty>`, Demo: () => <Empty title="No items" description="Add your first item."><Button variant="primary">Add</Button></Empty> },
    ],
    api: [],
  },
  {
    id: "field",
    name: "Field",
    description: "Wrapper for label, error, hint around inputs.",
    examples: [
      { id: "basic", title: "Basic", code: `<Field label="Email" id="email"><Input id="email" type="email" /></Field>`, Demo: () => <Field label="Email" id="demo-f"><Input id="demo-f" type="email" placeholder="you@example.com" /></Field> },
    ],
    api: [],
  },
  {
    id: "hover-card",
    name: "HoverCard",
    description: "Popover on hover.",
    examples: [
      { id: "basic", title: "Basic", code: `<HoverCard trigger={<span>Hover</span>} content={<div>Card content</div>} />`, Demo: () => <HoverCard trigger={<Button variant="ghost">Hover me</Button>} content={<div>Card content</div>} /> },
    ],
    api: [],
  },
  {
    id: "input-group",
    name: "InputGroup",
    description: "Input with left/right addons.",
    examples: [
      { id: "basic", title: "Basic", code: `<InputGroup left="https://" right=".com"><Input placeholder="example" /></InputGroup>`, Demo: () => <InputGroup left="https://" right=".com"><Input placeholder="example" /></InputGroup> },
    ],
    api: [],
  },
  {
    id: "input-otp",
    name: "InputOTP",
    description: "One-time code / PIN input. length, value, onChange.",
    examples: [
      { id: "basic", title: "Basic", code: `const [code, setCode] = useState("");\n<InputOTP length={6} value={code} onChange={setCode} />`, Demo: () => { const [c, setC] = useState(""); return <InputOTP length={6} value={c} onChange={setC} />; } },
    ],
    api: [],
  },
  {
    id: "progress",
    name: "Progress",
    description:
      "Linear progress bar with semantic progressbar role, optional label, color variants, and animated stripes—similar to Bootstrap progress.",
    examples: [
      {
        id: "basic",
        title: "Values and labels",
        code: `<Progress value={40} max={100} showLabel />
<Progress value={75} variant="success" />
<Progress value={30} variant="warning" striped />`,
        Demo: () => (
          <div className="demo-stack">
            <Progress value={40} showLabel />
            <Progress value={75} variant="success" />
            <Progress value={30} variant="warning" striped />
            <Progress value={90} variant="danger" size="lg" />
          </div>
        ),
      },
      {
        id: "sizes",
        title: "Sizes",
        code: `<Progress value={50} size="sm" />
<Progress value={50} size="md" />
<Progress value={50} size="lg" />`,
        Demo: () => (
          <div className="demo-stack">
            <Progress value={50} size="sm" />
            <Progress value={50} size="md" />
            <Progress value={50} size="lg" />
          </div>
        ),
      },
    ],
    api: [
      { name: "value", type: "number", default: "0", description: "Current value" },
      { name: "max", type: "number", default: "100", description: "Maximum value" },
      { name: "variant", type: "'default' | 'success' | 'warning' | 'danger'", default: "'default'", description: "Bar color" },
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Track height" },
      { name: "striped", type: "boolean", default: "false", description: "Animated stripes" },
      { name: "showLabel", type: "boolean", default: "false", description: "Show percentage above bar" },
      { name: "className", type: "string", default: "''", description: "Extra class" },
    ],
  },
  {
    id: "spinner",
    name: "Spinner",
    description: "Inline loading indicator for buttons, cards, and async UI (similar to Bootstrap spinners).",
    examples: [
      {
        id: "sizes",
        title: "Sizes",
        code: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" label="Loading" />`,
        Demo: () => (
          <div className="demo-flex gap wrap" style={{ alignItems: "center" }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" label="Loading content" />
          </div>
        ),
      },
      {
        id: "with-button",
        title: "With button",
        code: `<Button disabled leftIcon={<Spinner size="sm" />}>Please wait</Button>`,
        Demo: () => (
          <Button variant="secondary" disabled leftIcon={<Spinner size="sm" />}>
            Please wait
          </Button>
        ),
      },
    ],
    api: [
      { name: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", description: "Spinner dimensions" },
      { name: "label", type: "string", default: "-", description: "Sets role=status and aria-label when provided" },
      { name: "className", type: "string", default: "''", description: "Extra class" },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    description:
      "Accessible tab list and panels with arrow-key navigation between tabs (WAI-ARIA tabs pattern, similar to React-Bootstrap nav tabs).",
    examples: [
      {
        id: "basic",
        title: "Basic tabs",
        code: `<Tabs
  items={[
    { id: "home", label: "Home", panel: <p>Home content</p> },
    { id: "profile", label: "Profile", panel: <p>Profile content</p> },
  ]}
/>`,
        Demo: () => (
          <Tabs
            items={[
              { id: "home", label: "Home", panel: <p>Welcome home.</p> },
              { id: "profile", label: "Profile", panel: <p>Your profile settings.</p> },
              { id: "contact", label: "Contact", panel: <p>Get in touch.</p> },
            ]}
          />
        ),
      },
      {
        id: "default-tab",
        title: "Default selected tab",
        code: `<Tabs defaultTabId="profile" items={[...]} />`,
        Demo: () => (
          <Tabs
            defaultTabId="profile"
            items={[
              { id: "home", label: "Home", panel: <p>Home</p> },
              { id: "profile", label: "Profile", panel: <p>Profile opens first.</p> },
            ]}
          />
        ),
      },
    ],
    api: [
      {
        name: "items",
        type: "Array<{ id, label, panel }>",
        default: "[]",
        description: "Tab definitions; panel is ReactNode for the tab content",
      },
      { name: "defaultTabId", type: "string", default: "-", description: "Initially selected tab id" },
      { name: "onTabChange", type: "(id: string) => void", default: "-", description: "Called when selection changes" },
      { name: "className", type: "string", default: "''", description: "Root class" },
    ],
  },
];

export function getComponentById(id) {
  return componentsRegistry.find((c) => c.id === id) || null;
}
