<template>
  <table>
    <tr>
      <td>名称</td>
      <td>价格</td>
      <td>数量</td>
      <td>总价</td>
    </tr>
    <tr v-for="item in list" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <button @click="sub(item)">-</button>
        {{ item.count }}
        <button @click="add(item)">+</button>
      </td>
      <td>{{ item.price * item.count }}</td>
      <td><button @click="removeById(item.id)">移除</button></td>
    </tr>
  </table>
  总价:{{ sum }}
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const list = ref([
  { id: 1, name: '计算机1', price: 123, count: 1 },
  { id: 2, name: '计算机2', price: 234, count: 1 },
  { id: 3, name: '计算机3', price: 134, count: 1 },
  { id: 4, name: '计算机4', price: 999, count: 1 },
  { id: 5, name: '计算机5', price: 1235, count: 1 }
])
const add = (item1: any) => {
  // item.count++
  // console.log(list.value);
  list.value.forEach(item => {
    if (item.id === item1.id) {
      item.count++
    }
  })
}
const sub = (item: any) => {
  item.count--
  console.log(list.value);
}
const removeById = (id: any) => {
  list.value = list.value.filter(item => item.id != id)
}
const sum = computed(() => {
  return list.value.reduce((prev, current) => prev + current.price * current.count, 0)
})
</script>

<style scoped></style>