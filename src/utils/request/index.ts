import axios, { HttpStatusCode } from 'axios'
import { message } from 'ant-design-vue';

const baseURL = import.meta.env.VITE_BASE_URL || ''
const timeout = parseInt(import.meta.env.VITE_REQUEST_TIMEOUT || '10000')

const httpAxios = axios.create({
    baseURL: baseURL,                               // 请求的基础路径
    timeout,                                        // 请求超时时间
    withCredentials: false,                         // 跨域请求是否携带 Cookie
})

// 请求拦截器
httpAxios.interceptors.request.use(
    config => {

        // 设置请求头
        if (!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json"; 
        }

        console.log("请求配置", config);
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
httpAxios.interceptors.response.use(
    response => {
        // TODO 业务状态码处理
        if (response.data.code != 0) {
            console.log('F', response.data)
            const errMsg = response.data.message || '业务未知错误'
            message.error(errMsg)
            return Promise.reject(errMsg)
        }

        return response.data
    },
    error => {
        console.log('G')
        
        let errMsg = ''
        if (error && error.response) {
            switch (error.response.status) {
                case HttpStatusCode.Found:
                    errMsg = "接口重定向了！";
                    break;
                case HttpStatusCode.BadRequest:
                    errMsg = "参数不正确！";
                    break;
                case HttpStatusCode.Unauthorized:
                    errMsg = "您未登录，或者登录已经超时，请先登录！";
                    break;
                case HttpStatusCode.Forbidden:
                    errMsg = "您没有权限操作！";
                    break;
                case HttpStatusCode.NotFound:
                    errMsg = `请求地址出错: ${error.response.config.url}`;
                    break;
                case HttpStatusCode.MethodNotAllowed:
                    errMsg = "请求超时！";
                    break;
                case HttpStatusCode.Conflict:
                    errMsg = "系统已存在相同数据！";
                    break;
                case HttpStatusCode.InternalServerError:
                    errMsg = "服务器内部错误！";
                    break;
                case HttpStatusCode.NotImplemented:
                    errMsg = "服务未实现！";
                    break;
                case HttpStatusCode.BadGateway:
                    errMsg = "网关错误！";
                    break;
                case HttpStatusCode.ServiceUnavailable:
                    errMsg = "服务不可用！";
                    break;
                case HttpStatusCode.GatewayTimeout:
                    errMsg = "服务暂时无法访问，请稍后再试！";
                    break;
                case HttpStatusCode.HttpVersionNotSupported:
                    errMsg = "HTTP 版本不受支持！";
                    break;
                default:
                    errMsg = `异常问题，请联系管理员！错误码：${error.response.status}`;
                    break;
            }
        }
        console.log('0000')
        
        message.error(errMsg)

        return Promise.reject(errMsg)
    }
)


export default httpAxios