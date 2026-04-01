import pkg from "../../package.json";

/** Published npm version (from package.json). */
export const PACKAGE_VERSION = pkg.version;

/** Public GitHub repository URL for links in the demo shell. */
function repoWebUrl() {
  const raw = pkg.repository?.url;
  if (!raw || typeof raw !== "string") {
    return "https://github.com/Vidyasagar214/tri-ui-library";
  }
  return raw
    .replace(/^git\+/, "")
    .replace(/\.git$/, "");
}

export const GITHUB_REPO_URL = repoWebUrl();

/** npm package page (docs footer / community links). */
export const NPM_PACKAGE_URL = "https://www.npmjs.com/package/tri-ui-library";

/** GitHub issues for bug reports and discussion. */
export const GITHUB_ISSUES_URL = `${GITHUB_REPO_URL}/issues`;
