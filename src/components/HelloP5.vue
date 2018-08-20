<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div class='sketch' id="sketch" ref="sketch">
    </div>
  </div>
</template>

<script>
import P5 from 'p5';
import sketch from './sketch';


export default {
  name: 'HelloP5',
  props: {
    msg: String,
  },
  data() {
    return {
      myp5: null,
    };
  },
  mounted() {
    this.myp5 = new P5(sketch, this.$refs.sketch);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #sketch {
    width: 100%;
    height:80vh;
    left: 0;
    top: 0;
    border: 1px solid black;
  }
h3 {
  margin: 1em 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
