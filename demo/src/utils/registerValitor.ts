// 注册的页面
import { ref } from 'vue'
interface RegisrerUser {
  username: string;
  password: string;
  enterpassword: string;
  mobile: string;
  email: string
}
export const registerUser = ref<RegisrerUser>({
  username: '',
  password: '',
  enterpassword: '',
  mobile: '',
  email: ''
})
// 注册的表单规则
export const validatePass2 = (_rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerUser.value.password) {
    callback(new Error("两次输入的密码不一致"))
  } else {
    callback()
  }
}
export const registerRole = ref({
  username: [{ required: true, tigger: 'blur', message: '账号在5-10位之间', min: 5, max: 10 }],
  password: [{ required: true, tigger: 'blur', message: '密码在5-10位之间', min: 5, max: 10 }],
  email: [{ required: true, type: 'email', message: '邮箱有误', trigger: 'blur' }],
  enterpassword: [{ required: true, tigger: 'blur' }, { validator: validatePass2 }],
})