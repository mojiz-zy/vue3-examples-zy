<template>
  <div>
    <h1>组件化设计与传参</h1>
    <p>
      组件粒度过粗包含过多内容，会使组件过于臃肿不利于维护。可将部分内容合理分割设计为独立组件。
      但组件粒度过细也会增加维护成本。
    </p>
    <item v-for="(c, index) of courses" :key="index" :course="c" />
    <!-- :course="c" 是给子组件传/绑定当前循环的数组中的元素的，告诉子组件要渲染哪一个，由子组件负责渲染-->
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { LIST_COURSES } from "@/store/VuexTypes";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import item from "./Item.vue";

export default defineComponent({
  components: { item },
  setup() {
    const store = useStore<State>();
    store.dispatch(LIST_COURSES);
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
