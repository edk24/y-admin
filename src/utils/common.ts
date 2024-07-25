import CryptoJS from 'crypto-js'

export const md5 = (data: string) => CryptoJS.MD5(data).toString()