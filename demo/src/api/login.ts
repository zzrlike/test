import http from "../utils/http";
interface login {
  username: string,
  password: string

}
interface register extends login {
  mobile: string,
  email: string
}
// 登陆的api
export const loginApi = (data: login) => {
  return http({
    method: 'POST',
    url: '/login',
    data
  })
}
// 注册的api
export const registerApi = (data: register) => {
  return http({
    method: 'POST',
    url: '/login',
    data
  })
}