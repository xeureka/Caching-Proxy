import NodeCache from "node-cache";

const memoryCache = new NodeCache()

export function setCache(key: string, data:any, ttl: number = 60){
    memoryCache.set(key, data,ttl)
}

export function getCache(key: string){
    return memoryCache.get(key) || null
}

export function clearAllCache(){
    memoryCache.flushAll()
}
