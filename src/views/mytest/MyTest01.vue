<template>
  <div id="box">
    {{ myname }}
    <button @click="handleClick()">change</button>
    <div v-show="isShow">我是动态的隐藏和显示</div>
  </div>
</template>
<script>
const vm = new Vue({
  el: "#box",
  data: function() {
    return {
      myname: "zy",
      isShow: true
    };
  },
  methods: {
    handleClick() {
      console.log("handleClick");
      this.myname = "xiaozhang";
    }
  }
});
</script>
