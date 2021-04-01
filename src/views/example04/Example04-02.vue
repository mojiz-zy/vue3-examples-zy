<template>
  <div>
    <h1>composition--API</h1>
    <p>基于组合式API重写Eample02</p>
    <hr />
    <h1>ref()</h1>
    <p>
      red()函数，支持 基本数据类型/数组/对象/数据转换为响应式数据
      在TS中通过value属性获取/修改，在视图模板使用自动拆箱
    </p>
    <p>
      messageRef为响应式属性，即当其封装的数据改变时，动态响应式改变。
      <br />
      messgeRef:{{ messgeRef }}
    </p>

    <button type="button" @click="changeUserRef">changeUserRef</button>
    <br />
    {{ userRef?.name }}/ {{ userRef?.insertTime }}/ {{ userRef?.address }}
    <br />
    <h1>computed()</h1>
    <p>
      computed()函数。声明计算属性，当user对象改变时，重新计算user中inserttime属性值
    </p>
    {{ userComputed }}
    <br />
    <h1>watch()</h1>
    <p>
      watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)
      <br />
      watch()函数包含2个参数，被监听的响应式属性(Ref对象)，传入new/old值的监听回调函数
    </p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { User } from "@/datasource/Types";

export default defineComponent({
  setup() {
    const isShow = false; //一个被监听的属性
    const messgeRef = ref("hello");
    const user: User = {
      name: "zy",
      insertTime: "2020-12-12T16:33:40"
    };
    const userAsync: User = {
      name: "SUN",
      insertTime: "2012-12-12T17:44:51",
      address: "966"
    };
    const userRef = ref(user); //把user变成响应式的
    const changeUserRef = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    const userComputed = computed(() =>
      userRef.value.insertTime?.replace("T", "  ")
    );
    watch(userRef, (newUser, oldUser) =>
      alert(`用户名被改为: ${newUser.name}`)
    );
    return {
      isShow, //推上去看看视图改变时watch会不会有用
      messgeRef,
      user,
      userRef,
      changeUserRef, //推到视图调用，改变user
      userComputed
    };
  }
});
</script>
