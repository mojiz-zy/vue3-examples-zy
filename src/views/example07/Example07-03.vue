<template>
  <div>
    <p>{{ user.name }} / {{ user.address }}</p>
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="asyncUpstate">asyncUpstate</button>
    </p>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import { User } from "@/datasource/Types";
import { Store, useStore } from "vuex";
import { State } from "@/store";
import { UPSTATE_USER } from "@/store/VuexTypes";
//声明一个独立函数，传入处理数据，以及需要激活异步事件的store对象；从setup()传过来，处理数据，再返回处理后的值供调用
function useAsyncUpstateUser(myUser: Ref<User>, store: Store<State>) {
  const asyncUpstate = () =>
    store.dispatch(UPSTATE_USER, {
      name: myUser.value.name,
      address: myUser.value.address
    } as User);
  return {
    asyncUpstate
  };
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const user = computed(() => store.state.user);
    const myUser: Ref<User> = ref({});
    const { asyncUpstate } = useAsyncUpstateUser(myUser, store);
    return {
      user,
      myUser,
      asyncUpstate
    };
  }
});
</script>
