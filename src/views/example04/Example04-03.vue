<template>
  <div></div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from "vue";
import { User } from "@/datasource/Types";

function useMessage(msg: Ref<string>) {
  const reversMessage = computed(() =>
    msg.value
      .split("")
      .reverse()
      .join("")
  );
  const changeMessage = () => {
    msg.value = "compisition-api";
  };
  return {
    reversMessage,
    changeMessage
  };
}

export default defineComponent({
  setup() {
    //初始化数据
    const user: User = {
      name: "zy",
      insertTime: "2020-02-02T21:16:16"
    };
    //创建响应式数据
    const userRef = ref(user);
    const messgeRef = ref("hello world!");
  }
});
</script>
