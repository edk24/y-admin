import { getCache, setCache } from "./cache";

/**
 * 设置 token
 */
export function setToken(token: string, expire: number = -1) {
    setCache('token', token, expire);
}

/**
 * 获取 token
 */
export function getToken() {
    return getCache('token');
}