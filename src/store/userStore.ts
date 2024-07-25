import { defineStore } from "pinia";
import { getToken, setToken } from "../utils/token";
import { apiGetUserInfo } from "../api/auth";

interface UserInfo {
    name: string;
    avatar: string;
}

interface UserState {
    token?: string;
    userInfo: UserInfo | undefined
}

const useUserStore = defineStore('user', {
    state: (): UserState => ({
        token: getToken(),
        userInfo: undefined
    }),
    getters: {
        /** 是否已登录 */
        isLogin: (state) => state.token && state.userInfo,
    },
    actions: {
        /** 设置 token */
        setToken(token: string) {
            console.log('setToken', token)
            this.token = token;
            setToken(token);
            return this.getUser();
        },
        /** 获取用户信息 */
        getUser() {
            return new Promise((resolve, reject) => {
                apiGetUserInfo().
                    then((res) => {
                        this.userInfo = res.data;
                        console.log('getUser', res.data)
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
        },
        /** 退出登录 */
        logout() {
            this.token = undefined;
            this.userInfo = undefined;
            setToken('');
        }
    }
})

export default useUserStore