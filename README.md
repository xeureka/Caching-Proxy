🚀 Caching Proxy CLI
A super-fast 🚀 Node.js + TypeScript caching proxy server designed to boost performance by serving cached responses! It comes with a convenient CLI, Docker support, and easy cache clearing.

✨ Features
CLI Tool: Start a caching proxy server that forwards requests to an origin, caches responses in-memory, and returns them for repeated requests.

🗑️ Clear Cache: Easily clear the cache using the CLI.

🐳 Docker & Docker Compose: Seamless deployment with Docker support.

🏷️ Cache Status Headers:

X-Cache: HIT → Served from cache.

X-Cache: MISS → Fetched from origin server.

🔧 Built with Node.js, Express, TypeScript, and Node-Cache.

📂 Project Structure
caching-proxy/
├── bin/
│   └── caching-proxy.ts # CLI entry point
├── src/
│   └── cache.ts # Cache utility functions
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

🐳 Running with Docker
Get up and running with Docker in a flash!

1. Build the Docker Image:

docker build -t caching-proxy .

2. Run the Caching Proxy Container:

docker run -it --rm -p 3000:3000 caching-proxy --port 3000 --origin http://dummyjson.com

3. Clear Cache Via Docker:

docker run -it --rm caching-proxy --clear-cache