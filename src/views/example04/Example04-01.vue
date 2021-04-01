<template>
  <div>
    <h1>reactive()</h1>
    <p>
      reactive()函数，将对象转换为响应式对象，不支持基本数据类型，number、boolean等
    </p>
    <br />
    {{ userReact?.name }} / {{ userReact?.insertTime }} /
    {{ userReact?.address }}
    <br />
    <p>
      按钮绑定的执行函数，在setup()中返回
      <br />
      userReact为代理对象，封装的user对象为响应式。但是，直接改变userReact引用的对象是无效的,需对属性进行操作
    </p>
    <button type="button" @click="changeUserWrong">changeUserWrong</button>
    <br />
    刷新页面重新点击。只能修改user对象中的属性，且默认无法添加新属性，即无法获取新的address属性值
    <br />
    <button type="button" @click="changeUserReact">changeUserReact</button>
    {{ userReact?.name }} / {{ userReact?.insertTime }} /
    {{ userReact?.address }}
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { User } from "@/datasource/Types";
const user: User = {
  name: "zy",
  insertTime: "2020-11-23T19:55:55"
};
const userAsync: User = {
  name: "SUN",
  insertTime: "2012-12-12T12:12:12",
  address: "996"
};
export default defineComponent({
  setup() {
    let userReact = reactive(user);
    console.log(userReact); //修改对象引用的函数，在视图执行
    //=> 无效，改变对象的引用，无法被追踪(就是操作时TS会找不到初始的对象，只修改代理对象没有用)
    const changeUserWrong = () => {
      setTimeout(() => {
        userReact = userAsync;
      }, 1000);
      //需修改响应对象的值
    };
    const changeUserReact = () => {
      setTimeout(() => {
        userReact.name = userAsync.name;
        userReact.insertTime = userAsync.insertTime;
        userReact.address = userAsync.address;
      }, 1000);
    };
    return {
      user,
      userReact,
      changeUserWrong,
      changeUserReact
    };
  }
});
</script>
