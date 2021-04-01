<template>
  <div>
    <h1>form buiding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="famale" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          <!--?value是,传给TS的数据，可以把修改的值传给TS中的对象-->
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <!--?为什么这里没有value ?template标签不具有value属性；为什么和template绑定 -->
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          <!--value值是要给TS传值的，那么它所传的值的类型必须要与v-model所绑定的内容类型一致，此处，user.courses的类型是一个Courses的对象，所以value值也必须是一个对象，在js中用 {**} 框起来表示对象 -->
          {{ c.name }}
        </label>
      </template>
      <br />
      <button type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <br />
    <hr />
    <br />
    <input type="file" @change="fileChange($event.target.files[0])" />
    <p>{{ file.fileName }}/{{ file.fileSize }}</p>
    <br />
  </div>
</template>

<script lang="ts">
import { listTitles } from "@/datasource/DataSource";
import { listCourses } from "@/datasource/DataSource";

import { defineComponent, ref, Ref } from "vue";
import { User } from "@/datasource/Types";

interface VFile {
  fileName: string;
  fileSize: string;
}
function useFile(file: Ref<VFile>) {
  //把前面的绑过来了,file接受Ref<VFile>的对象
  const fileChange = (f: File) => {
    console.log(f);
    file.value.fileName = f.name; //把前面传过来的新的f.name赋给fileName这个响应式变量（注：通过** .value  对响应式的对象进行操作）
    file.value.fileSize = `${(f.size / 1024 / 1024).toFixed(2)}MB`; //此处 `` 反引号用来合并表示静态的字符串和动态的变量，是js中的表达 ="变量+字符串"的表达
  };
  return {
    fileChange
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({
      courses: []
    }); /*
    ref() 函数中封装初始对象，基本数据类型属性可以不声明，数组属性必须显示创建空数组，使用时自动添加
     ref()使User变成响应式的对象，才可实现双向绑定，保证视图上修改时，vm(ts代码中存储的数据也会变)中也会变*/
    const file = ref({ fileName: "", fileSize: "" });
    const courses = listCourses(); //声明 courses这个对象来获取listCourses()的函数值
    const titles = listTitles(); //同上
    const { fileChange } = useFile(file); //???
    return {
      user,
      titles,
      file,
      courses,
      fileChange
    };
  }
});
</script>
