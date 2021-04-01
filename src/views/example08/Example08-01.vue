<template>
  <div>
    <h1>传参</h1>
    <br />
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>creatTime</td>
        <td>operation</td>
      </tr>
      <tr v-for="(c, index) of courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.creatTime }}</td>
        <td><editbutton :courses="c" /></td>
        <!-- 在视图引入子组件，创建新的行时创建子组件，把当前循环元素绑定到/传递到子组件-->
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { LIST_COURSES } from "@/store/VuexTypes";
import { Store, useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import editbutton from "./EditButton.vue";

export default defineComponent({
  components: { editbutton },
  setup() {
    useStore().dispatch(LIST_COURSES);
    const store: Store<State> = useStore();
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
