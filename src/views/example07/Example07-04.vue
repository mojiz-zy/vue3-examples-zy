<template>
  <div>
    <p>通过mapState，获取state指定属性名称的值。</p>
    {{ user.name }} / {{ user.address }}
    <br />
    <p>
      基于setup()绑定
      <br />
      <span v-if="premissionGetter(1)">用户权限为1时显示</span>
      <span v-if="premissionGetter(2)">用户权限为2时显示</span>
    </p>
    <p>
      基于mapGetters辅助函数绑定
      <br />
      <span v-if="premission(1)">用户权限为1时显示</span>
      <span v-if="premission(2)">用户权限为2时显示</span>
    </p>
  </div>
</template>
<script lang="ts">
import { mapGetters, mapState, Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { GETTER_PERMISSIN } from "@/store/VuexTypes";
import { State } from "@/store";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const premissionGetter = computed(() => store.getters[GETTER_PERMISSIN]);
    return {
      premissionGetter
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["premission"])
  }
});
</script>
