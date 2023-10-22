<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <AdminHeader></AdminHeader>
      </el-header>
      <el-container>
        <el-affix>
          <el-aside width="200px">Aside</el-aside>
        </el-affix>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '../../components/layout/AdminHeaader.vue'
import { getUser } from '../../api'
import { onMounted, ref } from 'vue';
const page = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
onMounted(async () => {
  const res = await getUser(page.value)
  console.log(res);

})
</script>

<style scoped lang="scss">
.common-layout {
  height: 100vh;
}

.el-header {
  background-color: #2b2c43;
  padding: 0;
}

.el-aside {
  background-color: #2b2c43;
  min-height: calc(100vh - 60px);
}
</style>