<template>
  <div>
    <h1>Vue 示例</h1>
    <ul>
      <li><router-link to="/example01">hello world</router-link></li>
      <li><router-link to="/example02">Data()</router-link></li>
      <li><router-link to="/example03">setup</router-link></li>
      <li>
        <ul>
          <li>
            <router-link to="/example03-sid/studentid/12/homeworkid/1">
              sid:12,hid:1
            </router-link>
          </li>
          <li>
            <router-link to="/example03-sid.studentid/66/homeworkid/33">
              sid:66,hid:1
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
