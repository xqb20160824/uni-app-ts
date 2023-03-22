
import { request } from '@/utils/request/index';
 
//POST 请求案例
export const resGetCaptchaImage = (data?:any) => {
	return request({
		url: '/captchaImage',
		method: 'GET',
	})
}
// export type userDtoType = {
//     userName: string,
//     age: number
// }
// export type userFetchType = {
//     userId: string
// }

// export const fetchUserById = (data: userFetchType) =>
//     request<userDtoType>({url: mockUrl, method: "post", data});


