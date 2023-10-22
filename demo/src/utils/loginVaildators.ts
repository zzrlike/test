import { ref } from 'vue';
interface User {
  username: string;
  password: string;
}
// 收集输入的账号密码
export const loginUser = ref<User>({
  username: 'admin',
  password: '123456'
})
//校验规则
export const rules = ref({
  username: [{ required: true, tigger: 'blur', message: '账号在5-10位之间', min: 5, max: 10 }],
  password: [{ required: true, tigger: 'blur', message: '密码在5-10位之间', min: 5, max: 10 }]
})