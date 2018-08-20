<template>
  <div id="app">
     <HelloP5 msg="Welcome to P5.js Sketch board"/>
  </div>
</template>

<script>
import HelloP5 from './components/HelloP5.vue';

export default {
  name: 'app',
  components: {
    HelloP5,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
