# Tri UI Library

A reusable React UI component library built with **React**, **JavaScript**, and **plain CSS** (no Tailwind, Material UI, Bootstrap, or other UI frameworks).

## Setup (contributors)

```bash
npm install
npm run dev    # Development with demo app
npm run build  # Build library (runs automatically before `npm publish`)
```

## Publishing to npm (public package)

This library is set up like other React UI packages: consumers install it from the **public npm registry**.

### One-time setup

1. **Create an npm account** at [https://www.npmjs.com/signup](https://www.npmjs.com/signup).
2. **Log in locally:** `npm login` (or `npm login --auth-type=web` if you use 2FA).
3. **Choose the package name** in `package.json` → `"name"`. The name `tri-ui-library` must be **available** on npm. Check: `npm view tri-ui-library` (404 = free). If it is taken, use a [scoped name](https://docs.npmjs.com/about-scopes-and-packages) such as `@your-org/tri-ui-library` and set `"publishConfig": { "access": "public" }` (already set for public scoped packages).
4. **Replace placeholders** in `package.json`: `repository`, `bugs`, and `homepage` URLs (search for `YOUR_USERNAME`).

### Publish a version

1. Log in (once per machine, or when the token expires):

   ```bash
   npm login --auth-type=web
   ```

2. Bump **`version`** in `package.json` (semver), or run `npm version patch --no-git-tag-version` (also updates `package-lock.json`).

3. Publish (checks login first, then runs `prepublishOnly` → build → publish):

   ```bash
   npm run release
   ```

   Or use `npm publish` alone after confirming `npm whoami` prints your username.

#### If `npm publish` fails with **E404** or **E401**

- **E401** on `npm whoami`: you are not logged in. Run `npm login --auth-type=web` and finish the browser step.
- **E404** on `PUT …/tri-ui-library` while the package exists on npm: almost always **wrong or missing auth** (npm hides “forbidden” as 404). Log in again; ensure your npm user is a **maintainer** of `tri-ui-library` on [npmjs.com](https://www.npmjs.com/package/tri-ui-library).
- **E403** “cannot publish over the previously published versions”: bump `version` in `package.json` (you cannot re-publish the same semver twice).
- In **PowerShell**, run commands on separate lines. Avoid pasting `npm whoami # comment` on one line with `>>` continuations; that can break the shell.

- **`files`**: only the `dist/` folder is published (plus `README.md` and `LICENSE` automatically).
- **Peer deps:** apps must install `react` and `react-dom` themselves (same as MUI/Chakra).

### After publish — anyone can install

```bash
npm install tri-ui-library
```

(Use your real package name if you changed it.)

## Use in another project

From npm (or test locally with `npm link` / `"tri-ui-library": "file:../path/to/tri-ui-library"`):

```bash
npm install tri-ui-library
```

In your app:

```jsx
import { Button, Card, Alert } from "tri-ui-library";
import "tri-ui-library/styles.css";

function App() {
  return (
    <Card>
      <Alert type="success">Saved</Alert>
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Design System

All components use CSS variables from `variables.css`:

- **Colors:** `--ui-primary`, `--ui-secondary`, `--ui-danger`, etc.
- **Spacing:** `--ui-spacing-sm`, `--ui-spacing-md`, `--ui-spacing-lg`
- **Typography:** `--ui-font-size-*`, `--ui-font-weight-*`
- **Borders:** `--ui-border-radius`, `--ui-border`
- **Shadows:** `--ui-shadow`, `--ui-shadow-md`
- **Transitions:** `--ui-transition`, `--ui-transition-fast`

Override these in your app to theme the library.

## Components

| Component       | Description                    |
|----------------|--------------------------------|
| Accordion      | Expandable sections            |
| Alert          | Success / warning / error msg  |
| AlertDialog    | Modal confirmation             |
| AspectRatio    | Fixed aspect ratio container   |
| Avatar         | User avatar with fallback      |
| Badge          | Label / tag                    |
| Breadcrumb     | Navigation path                |
| Button         | Primary, secondary, danger     |
| ButtonGroup    | Grouped buttons                |
| Calendar       | Month calendar                 |
| Card           | Content container              |
| Carousel       | Slide content                  |
| Chart          | Simple bar chart               |
| Checkbox       | Checkbox with label            |
| Collapsible    | Toggle content                 |
| Combobox       | Searchable select              |
| Command        | Command palette shell          |
| ContextMenu    | Right-click menu               |
| DataTable      | Table from columns + data      |
| DatePicker     | Date input + calendar          |
| Dialog         | Modal dialog                   |
| Drawer         | Side panel                     |
| DropdownMenu   | Menu from trigger              |
| Empty          | Empty state                    |
| Field          | Label + error wrapper          |
| HoverCard      | Hover popover                  |
| Input          | Text input with label/error    |
| InputGroup     | Input with addons              |
| InputOTP       | OTP / PIN input                |

## Accessibility

Components include:

- `aria-label`, `aria-expanded`, `aria-selected` where appropriate
- `role` attributes for dialogs, menus, alerts
- Keyboard support (Escape to close dialogs, arrows in dropdowns)
- Focus management in modals

## License

MIT
