/* eslint-disable */
// #ifdef H5
// #endif
//常用方法集合
export default {
	/**
	 * toast提示
	 */
	toast(title: string, duration = 3000, mask = false,) {
		uni.showToast({
			title,
			duration,
			mask,
			icon: 'none'
		});
	},
	/**
	 * 异步获取设备信息
	 */
	getInfoAsync() {
		return new Promise((resolve, reject) => {
			plus.device.getInfo({
				success(e) {
					resolve(e);
				},
				fail(e) {
					reject(e.message);
				}
			});
		});
	},
	/**
	 * 安卓10不支持IMEI,则获取OAID
	 */
	getOaidAsync() {
		return new Promise((resolve, reject) => {
			plus.device.getOAID({
				success(e) {
					resolve(e);
				},
				fail(e) {
					reject(e.message);
				}
			});
		});
	},

	/**
	 * 获取ios的IDFA
	 */
	getIdfa() {
		let idfa = '';
		try {
			if ('iOS' == plus.os.name) {
				let manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
				if (plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')) {
					let identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
					idfa = plus.ios.invoke(identifier, 'UUIDString');
					plus.ios.deleteObject(identifier);
				}
				plus.ios.deleteObject(manager);
			}
		} catch (e) {
			console.error('获取idfa失败');
		}
		return idfa;
	},


	/**
	 * 比较版本号
	 */
	compareVersion(reqV: any, curV: any) {
		if (curV && reqV) {
			let arr1 = curV.split('.'),
				arr2 = reqV.split('.');
			let minLength = Math.min(arr1.length, arr2.length),
				position = 0,
				diff = 0;
			while (
				position < minLength &&
				(diff = parseInt(arr1[position]) - parseInt(arr2[position])) == 0
			) {
				position++;
			}
			diff = diff != 0 ? diff : arr1.length - arr2.length;
			if (diff > 0) {
				if (position == minLength - 1) {
					return 1;
				} else {
					return 2;
				}
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	},

	// 去掉字符串中的空格
	trim(str: string) {
		if (!str) {
			return '';
		}
		return str.replace(/\s*/g, '');
	},

};
