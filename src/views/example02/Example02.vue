<template>
  <!--以下是与script的VM进行绑定，template means 模板 -->
  <div>
    <p>{{ msg }}</p>
    <!--运行时会把第11行的值渲染到这里，就相当于把script和模板绑定了-->
    <p>{{ user.name }} / {{ replace }}</p>
    <!--replace会显示conputed中replace的return值，因为当前的显示逻辑过于复杂的话还放在模板中就不合适了，模板变得重了，此时需要通过计算属性(computed)来简化模板 -->
    <!--同理把user对象的name属性绑定到了这里-->
    <button @click="changed">click</button>
    <br />
    {{ user.address }}
    <hr />
    <button type="button" @click="isShow = !isShow">show</button>
    <!--<ul >
      <li v-for="(item,index) of datalist">
        {{item}}-------{{index}}
        </li>
        
    </ul>-->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//理解成MVVM中的VM view model,以下是声明了个VM
export default defineComponent({
  data: () => ({
    //data绑定数据的，？把所有的方法当作属性来写
    //是一个简写，记下；和下面注掉的意义相同
    isShow: false,
    msg: "这里是要渲染的信息",
    user: {
      //以user为键,user是对象，用{}
      name: "user.name: zy",
      inserTime: "2021.03.14T22:04:10",
      address: ""
    }
    //datalist:["aaaa","bbbb","cccc"]
  }),
  methods: {
    //一个一个的方法，也要跟模板进行绑定，？属性是一个一个对象
    changed() {
      this.user.name = "sun"; //this是当前的view对象下的，从第13行开始的
    },
    addAddress() {
      this.user.address = "996";
    }
  },
  computed: {
    //？属性就是一个一个属性
    replace(): string {
      //这种写法很像是一个方法，但是它是一个属性，只是正好这么简写(把属性的get()方法简写)
      /*replace()是一个属性，在执行时返回它的get()方法执行的值；replace是一个属性正好是get方法的值
      复习：get()方法是没有参数的，只能获取，不可给它传参，只是返回它获取的值,所以必有return;set()方法才可以传参*/
      return this.user.inserTime.replace("T", "  "); //返回把当前view下的user对象的inserTime属性中的T替换成“  ”后的结果
    }
    /*myData() {
      return this.user.inserTime.replace("T", "  ");
    },
    meReplace() {
      return data => data.replace("T", " "); //this.user.inserTime.replace("T", "  ");
    }*/
  },
  watch: {
    isShow(newValue, oldValue) {
      alert("新值为${newValue}");
    }
  }
});

/*data() {
    /*给vue声明响应式的数据，在返回值里才是响应式的
    return {
      msg: "aaa" /* 这里是一个键值对，既然是键值对就可以声明对象,
      user: {
        name: "zy"
      }
      courses:[]/*还可以声明相应的数据 ，（一个对象里可以有好多东西？）
    };
  }
};*/
</script>
