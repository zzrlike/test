<template>
  <el-form :model="registerUser" :rules="registerRole" ref="registerFormRef" label-width="84px"
    class="registerForm sign-up-form reg">
    <h3 class="title">用户注册</h3>
    <el-form-item label="账号" prop="username">
      <el-input type="password" v-model="registerUser.username" placeholder="Enter Account..." />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="registerUser.password" placeholder="Enter Password..." />
    </el-form-item>
    <el-form-item label="确认密码" prop="enterpassword">
      <el-input type="password" v-model="registerUser.enterpassword" placeholder="Enter Password..." />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input type="email" v-model="registerUser.email" placeholder="Enter Email..." />
    </el-form-item>
    <el-form-item label="手机号">
      <el-input type="email" v-model="registerUser.mobile" placeholder="Enter Phone..." />
    </el-form-item>
    <div>
      <el-button type="primary" @click="Reginstersave" class="submit_btn">注册</el-button>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 引入注册需要的数据
import { registerUser, registerRole } from '../../../utils'
import { registerApi } from '../../../api'
// 提交
const registerFormRef = ref()
const Reginstersave = async () => {
  await registerFormRef.value.validate()
  try {
    const res = await registerApi(registerUser.value)
    console.log(res);
    ElMessage.success('注册成功')
  } catch (error) {
    ElMessage.error('注册失败')
  }
}
</script>

<style scoped>
.submit_btn {
  width: 100%;
  margin-bottom: 2rem;
}

.title {
  text-align: center;
  margin: 5px 0 20px;
  font-weight: bold;
  font-size: 26px;
}

.reg {
  transform: translateY(-50%);
  width: 70%;
  margin-left: 4rem;
}
</style>