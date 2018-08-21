<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <div class='sketch' id="sketch" ref="sketch">
    </div>
  </div>
</template>

<script>
/* eslint no-param-reassign: ["error", { "props": false }] */
import P5 from 'p5';
// import sketch from './sketch';
// https://github.com/processing/p5.js/wiki/Global-and-instance-mode

const sketch = function (p) {
  const x = 100;
  const y = 100;

  p.setup = function () {
    // TODO try to avoid using getElementById
    const width = document.getElementById('sketch').clientWidth;
    const height = document.getElementById('sketch').clientHeight;
    p.createCanvas(width, height);
    p.colorMode(P5.RGB, 255, 255, 255, 1);
  };

  p.draw = function () {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};


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
