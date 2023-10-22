import { defineStore } from 'pinia'
import { ref } from 'vue'
export const UserStore = defineStore('UserStore', () => {
  const token = ref('');
  const userInfo = ref([])
  const getuserInfo = (data: any) => {
    userInfo.value = data
  }
  const getToken = (value: string) => {
    token.value = value
  }
  const removeToken = () => {
    token.value = ''
  }
  return {
    token,
    getToken,
    removeToken,
    userInfo,
    getuserInfo
  }
},
  {
    persist: true
  }
)
