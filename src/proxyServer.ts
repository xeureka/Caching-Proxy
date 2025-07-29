import express, {Request, Response}  from 'express'
import axios from 'axios'
import { getCache,setCache,clearAllCache } from './caching'

export const clearCache = () => clearAllCache()

const startProxyServer = (port: number, origin: string) => {
    const app = express()
    app.use(express.json())

    app.use(async (req: Request, res: Response) => {
        const cacheKey = `${req.method}:${req.originalUrl}`

        const cachedResponse = getCache(cacheKey)
        if (cachedResponse){
            console.log(`[HIT] ${cacheKey}`)
            res.set("x-Cahce", "HIT")
            return res.send(cachedResponse)
        }

        try {
            const response = await axios({
                method: req.method as any,
                url: `${origin}${req.originalUrl}`,
                data: req.body,
                headers:{ ...req.header,host: undefined}
            })

            setCache(cacheKey,response.data,60)
            console.log(`[MISS] ${cacheKey}`)
            res.set("X-Cache","MISS")
            res.set(response.headers)
            return res.status(response.status).send(response.data)
        } catch (error) {
            console.error("❌ Proxy Error:", (error as Error).message);
            return res.status(500).send({ error: "Failed to fetch from origin" });
        }
    })
    app.listen(port, () => {
        console.log(`🚀 Caching proxy running on http://localhost:${port}`);
        console.log(`🔗 Forwarding to: ${origin}`);
    });
}

export default startProxyServer;
