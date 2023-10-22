<template>
  <div class="header">
    <div class="logo-box">
      超级后台管理系统
    </div>
    <div class="right-box">
      <div class="text"></div>
      <div class="avatar-box">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-button class="btn" type="primary" @click="goout">退出登录</el-button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { UserStore } from '../../store/index.ts'
import { useRouter } from 'vue-router'
const router = useRouter()
const userstore = UserStore()
const goout = () => {
  userstore.removeToken()
  ElMessage.success('退出成功')
  router.push('/login')
}
</script>

<style scoped lang="scss">
.header {
  // background-color: #2b2c44;
  color: #fff;
  display: flex;
  justify-self: space-between;

  .logo-box {
    width: 200px;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
    font-weight: bold;
    color: #e73267
  }

  .right-box {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    .avatar-box {
      display: flex;
      justify-content: center;

      .btn {
        margin-top: 5px;
      }
    }

    .el-avatar {
      margin-right: 10px;
    }
  }
}
</style>