<template>
  <div>
    <a class="btn" @click="active = true">Edit</a>
    <div class="model" v-if="active" @click="active = false">
      <div class="model-dialog" @click.stop>
        <div class="model-header">
          <h3>Model Title</h3>
        </div>
        <div class="model-content">
          <p>
            父元素传入的数据可以在子元素渲染显示，但不能在子元素直接改变，即不能直接双向绑定传入的数据(单向数据流).
          </p>
          <br />
          <p>从props传入的对象可以直接渲染： {{ courses.name }}</p>
          <p>
            双向绑定的时候,需要取出props中的数据，填充至新创建(courseR)的响应式对象里；(类似于先getter出来再setter进去)
            <input v-model="courseR.name" />
          </p>
          <p>
            通过vue事件修饰符(.stop)阻止事件传播等
            <a
              href="https://v3.cn.vuejs.org/guide/events.html#事件修饰符"
              target="_blank"
            ></a>
          </p>
        </div>
        <div class="model-footer">
          <button class="btn btn-primary">Save Change</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Course } from "@/datasource/Types";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  props: {
    //声明暴露一个course的属性
    course: Object as PropType<Course> //course属性是Object类型但强制断言为Course类型
    //props中的属性必须是string/number/object等基本类型的type类型。需通过PropType<T>Object转为自定义Interdace类型；总之是比较复杂的转换了
  },
  setup(props) {
    const active = ref(false);
    const courseR = ref<Course>({ name: props.course?.name });
    //应创建一个新的响应式对象，与双向绑定输入框vuex state的方法相似
    //应该是若修改新的响应式对象开销会小于直接修改原响应式对象，只用传递修改了的属性就行？
    return {
      active,
      courseR
    };
  }
});
</script>
<style scoped>
a.btn {
  display: inline-block;
  padding: 5px 10px;
  background: red;
}

.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
}
/* 模态框容器中的对话框，实际显示操作的部分。显式声明宽度，基于margin自动居中 */
.modal .modal-dialog {
  width: 450px;
  margin: auto;
  background: white;
  top: 30px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* 加条下线，作为分割线 */
.modal .modal-header {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

/*改变文字大小*/
.modal .modal-dialog .modal-content {
  padding: 15px 15px 30px 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal .modal-dialog .modal-footer {
  text-align: right;
  padding: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 10px;
  margin: 2px;
  color: white;
  background: gray;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
}
.btn-primary {
  background: #007bff;
}
</style>
