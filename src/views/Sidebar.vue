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
      <li>
        Composition-API
        <ul>
          <li>
            <router-link to="/example04-01">reactive()</router-link>
          </li>
          <li>
            <router-link to="/example04-02">
              interface & ref() & computed() & watch()
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li><router-link to="/example06-01">v-models</router-link></li>
        </ul>
      </li>
      <li>
        Vuex
        <ul>
          <li><router-link to="/example07-01">state</router-link></li>
          <li><router-link to="/example07-02">Mutations</router-link></li>
          <li><router-link to="/example07-03">Actions</router-link></li>
          <li><router-link to="/example07-04">Getters</router-link></li>
        </ul>
      </li>
      <li>
        Passing Data to child component
        <ul>
          <li>
            <router-link to="/example08-01">
              Example
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
