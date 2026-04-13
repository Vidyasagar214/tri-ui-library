/**
 * Run before `npm publish` so failed auth shows a clear fix instead of npm's E404.
 */
import { execSync } from "node:child_process";

const registry = execSync("npm config get registry", { encoding: "utf8" }).trim();
if (!registry.includes("registry.npmjs.org")) {
  console.error(`\n[!] npm registry is not the public npm registry:\n    ${registry}`);
  console.error("    Fix: npm config set registry https://registry.npmjs.org/\n");
  process.exit(1);
}

try {
  const user = execSync("npm whoami", { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  console.log(`npm: logged in as ${user} (${registry})`);
} catch {
  console.error("\n[!] Not logged in to npm (or your token expired).\n");
  console.error("    Fix in this folder:");
  console.error("      npm logout");
  console.error("      npm login --auth-type=web");
  console.error("    Complete the browser prompt, then:");
  console.error("      npm run release");
  console.error("    (or: npm publish)\n");
  process.exit(1);
}
