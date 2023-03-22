import {
	defineStore
} from 'pinia'
import { ref } from 'vue'
export const useLoginStore = defineStore('login11Store', () => {
	const token = ref('')
	const isLogin = ref(false)
	token.value = '1111'
	isLogin.value = !!token.value

	const login = (tokenVal: any) => {
		token.value = tokenVal
		isLogin.value = !!tokenVal
	}
	const logout = () => {
		token.value = ''
	}
	return {
		token,
		isLogin,
		login,
		logout,
	}
})