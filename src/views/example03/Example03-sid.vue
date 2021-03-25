<template>
  <div>
    studentid:{{ sid }}
    <br />
    homeworkid:{{ hid }}
    <br />
    也可通过$route.params.sid获取
    {{ $route.params.sid }}
    <!-- 相当于vue提供的一个方法来获取  route是一个对象的params是一个对象的sid -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["sid", "hid"], //因为在route中添加了props的支持，所以可以在组件中使用sid，hid
  created() {
    //组件初始化之后模板渲染以前回调
    this.init();
  },

  beforeUpdate() {
    //数据改变之后重新渲染以前回调
    this.init();
  },
  methods: {
    init() {
      console.log(this.sid);
    }
  }
});
</script>
