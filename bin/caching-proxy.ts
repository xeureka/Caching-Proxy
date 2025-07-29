import { Command } from "commander";
import startProxyServer, { clearCache } from "../src/proxyServer";

const program = new Command();

program
  .name("caching-proxy")
  .description("A CLI-based caching proxy server")
  .version("1.0.0")
  .option("--port <number>", "Port to run the proxy", "3000")
  .option("--origin <url>", "Origin server URL")
  .option("--clear-cache", "Clear all cached responses");

program.parse(process.argv);
const opts = program.opts();

if (opts.clearCache) {
  clearCache();
  console.log("✅ Cache cleared successfully.");
  process.exit(0);
}

if (!opts.origin) {
  console.error("❌ Error: --origin <url> is required.");
  process.exit(1);
}

startProxyServer(Number(opts.port), opts.origin);
