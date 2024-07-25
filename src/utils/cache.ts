export function setCache(key: string, value: any, expire: number = -1) {
    const data = {
        value,
        expire: expire === -1 ? -1 : Date.now() + expire * 1000,
    };
    localStorage.setItem(key, JSON.stringify(data));
}

export function getCache(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
        const { value, expire } = JSON.parse(data);
        if (expire === -1 || expire >= Date.now()) {
            return value;
        }
        removeCache(key);
    }
    return null;
}

export function removeCache(key: string) {
    localStorage.removeItem(key);
}

export function clearCache() {
    localStorage.clear();
}


export default {
    set: setCache,
    get: getCache,
    remove: removeCache,
    clear: clearCache,
}