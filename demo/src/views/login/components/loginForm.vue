<template>
  <el-form :model="loginUser" :rules="rules" ref="ruleFormRef" label-width="84px" class="registerForm sign-in-form log">
    <h2 class="title">用户登录</h2>
    <el-form-item label="账号" prop="username">
      <el-input type="password" v-model="loginUser.username" placeholder="Enter Account..." />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="loginUser.password" placeholder="Enter Password..." />
    </el-form-item>
    <el-form-item label="Age">
      <el-input />
    </el-form-item>
    <div class="btn-div">
      <el-button type="primary" @click="save" class="submit_btn">提交</el-button>
    </div>
    <div class="tiparea">
      <p>忘记密码？<a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { loginApi } from '../../../api'
import { UserStore } from '../../../store'
const userstore = UserStore()
// 引入收集输入的账号密码
import { loginUser, rules } from '../../../utils'
import { useRouter } from 'vue-router';
const router = useRouter()
// 提交按钮的回调
const ruleFormRef = ref()
const save = async () => {
  await ruleFormRef.value.validate()
  try {
    const res = await loginApi(loginUser.value)
    userstore.getToken(res.data.data.token);
    userstore.getuserInfo(res.data.data)
    if (res.status === 200) {
      ElMessage.success('登录成功')
      router.push('/')
    } else {
      ElMessage.error('用户或密码错误')
    }
  } catch (error: any) {
    ElMessage.error('用户或密码错误', error)
  }
}


</script>

<style scoped>
/* register */
.registerForm {
  /* margin-top: 20px; */
  background-color: #fff;
  border-radius: 5px;
  width: 70%;
}

.submit_btn {
  width: 90%;
  /* margin-left: 4rem; */

}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p a {
  color: #4d84e2;
}

.btn-div {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.title {
  text-align: center;
  margin: 5px 0 20px;
  font-weight: bold;
  font-size: 26px;
}

.log {
  transform: translateY(50%);
  margin-left: 4rem;
}
</style>