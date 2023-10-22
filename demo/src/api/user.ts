import http from "../utils/http";
export const getUser = (data: any) => {
  return http({
    method: 'get',
    url: 'users',
    params: data
  })
}