#  Caching Proxy CLI

A **Node.js + TypeScript-based Caching Proxy Server** that forwards requests to an origin server, caches the responses, and serves cached responses for repeated requests to improve performance.  
It includes a **CLI interface**, supports **Docker & Docker Compose**, and offers an easy way to clear cache.

---

##  Features
-  **CLI Tool** to start a caching proxy server:
  - Forward requests to an origin server.
  - Cache responses (in-memory).
  - Return cached responses for repeated requests.
- 🗑 **Clear Cache** using CLI.
- 🐳 **Docker & Docker Compose** support for easy deployment.
- 🏷 Adds headers to indicate cache status:
  - `X-Cache: HIT` → Served from cache.
  - `X-Cache: MISS` → Fetched from origin server.
- 🔧 Built with **Node.js, Express, TypeScript**, and **Node-Cache**.

---

##  Project Structure
caching-proxy/
├── bin/
│   └── caching-proxy.ts        # CLI entry point 
├── src/
│   └── cache.ts                # Cache utility functions 
├── Dockerfile                  
├── .dockerignore              
├── .gitignore                 
├── package.json                
├── tsconfig.json              
└── README.md  

## Running with Docker

1. Build the Docker Image
docker build -t caching-proxy .

2. Run the Caching Proxy Container
docker run -it --rm -p 3000:3000 caching-proxy --port 3000 --origin http://dummyjson.com

3. Clear Cache Via Docker
docker run -it --rm caching-proxy --clear-cache
