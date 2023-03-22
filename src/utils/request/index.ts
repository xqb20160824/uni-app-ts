import {BASE_URL} from "@/config/index";
import Helper from "@/utils/helper"
export function request(options: { url: string; method: "GET" | "POST"; data?: object | any }) {
	return new Promise((resolve, reject) => {
		let header: any
		if (uni.getStorageSync('token') !== undefined && uni.getStorageSync('token') !== "") {
			header = {
				'content-type': 'application/json',
				'X-Auth-Token': uni.getStorageSync('token')
			};
		} else {
			header = {
				'content-type': 'application/json',
			};
		}
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			//带token发送请求
			header: header,
			success: (res: any) => {
				uni.hideLoading()
				if (res.data.code === 200) {
					resolve(res.data);
				} else {
					//其他异常
					Helper.toast(res.data.msg);
					reject(res.data);
				}
			},
			timeout: 50000,
			fail: (err) => {
				Helper.toast("服务器链接失败");
				reject(err)
			}
		})
	})
}