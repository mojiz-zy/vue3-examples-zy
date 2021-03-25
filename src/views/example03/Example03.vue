<template>
  <div>
    <p>{{ userRef.name }} / {{ userComputed }}</p>
    <br />
    <button type="button" @click="changeUserRef">change</button>
    <p>{{ changeUserRef?.address }} / {{ changeUserRef.insertTime }}</p>
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { computed, defineComponent, ref, watch } from "vue";
export default defineComponent({
  setup() {
    const user: User = {
      name: "zy",
      insertTime: "2020-12-12T12:12:12"
    };
    const userAsync: User = {
      //声明一个新的用来替换user的对象
      name: "SUN",
      insertTime: "2020-02-02T02:02:02",
      address: "956"
    };
    const userRef = ref(user); //userRef是user的代理对象，响应式的
    const changeUserRef = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    const userComputed = computed(() =>
      userRef.value.insertTime?.replace("T", "  ")
    );
    watch(userRef, (newUser, oldUser) =>
      alert("用户名被修改为：${newUser.name}")
    );
    return {
      userRef, //推给视图的user的响应式对象
      userComputed, //computed计算属性
      changeUserRef //替换user的函数
    };
  }
});
</script>
