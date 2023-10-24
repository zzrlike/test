import axios from "axios";
import { ElMessage, ElLoading } from "element-plus";
import Router from "../router";
import pinia, { UserStore } from '../store';
const userstore = UserStore(pinia)
const http = axios.create({
  // 根域名
  baseURL: 'http://47.96.255.64:8889/api/private/v1',
  // 超时时间
  timeout: 50000,
});
// 加载的loading
let loading: any
// 开始loading的函数
const stratLoading = () => {
  const options = {
    lock: true,
    text: '加载中',
    background: 'rgba(0,0,0,.7)'
  }
  loading = ElLoading.service(options)
}
// 结束的函数
const endloading = () => {
  loading.close()
}
// axios请求拦截器
http.interceptors.request.use(
  (config: any) => {
    // 加载loading
    stratLoading()
    if (userstore.token) {
      let token = userstore.token
      config.headers.Authorization = token
    }
    // 1.从pinia中获取token数据
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
http.interceptors.response.use(
  (res) => {
    // 关闭loading
    endloading()
    return res;
  },
  (e) => {
    endloading()
    // 统一错误提示
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // 401token失效处理
    // 1.清除本地用户数据
    // 2.跳转到登录页
    if (e.response.status === 401) {
      Router.push("/login");
    }
    return Promise.reject(e);
  }
);
export default http;
