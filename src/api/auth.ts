import request from '../utils/request/index'

interface LoginParams {
    username: string;
    password: string;
}

/**
 * 登录
 */
export function apiLogin(data: LoginParams) {
    return request.post('/api/auth/login', data);
}

/**
 * 获取用户信息
 */
export function apiGetUserInfo() {
    return request.get('/api/auth/userInfo');
}