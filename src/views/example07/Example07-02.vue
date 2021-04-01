<template>
  <div>
    <p>{{ user.name }} / {{ user.address }}</p>
    <br />
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="upstateUser">upstate</button>
    </p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { User } from "@/datasource/Types";
import { UPSTATE_USER } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore(); //调用store
    const user = computed(() => store.state.user); //一个响应式的对象
    const myUser = ref<User>({}); //执行upstateUser()函数时，从双向绑定的数据中获取值，而非直接传递myUser对象
    const upstateUser = () => {
      store.commit(UPSTATE_USER, {
        //store.commit()函数：激活指定mutation事件
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    return {
      user,
      myUser,
      upstateUser
    };
  }
});
</script>
