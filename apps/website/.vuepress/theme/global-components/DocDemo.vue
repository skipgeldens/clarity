<template>
  <div class="demo-container" :id="id">
    <span v-html="demo"></span>
    <div class="toggle-bar">
      <button class="btn btn-primary btn-sm" v-if="!state" @click="state = !state">Show Code</button>
      <button class="btn btn-primary btn-sm" v-if="state" @click="state = !state">Hide Code</button>
    </div>
    <div class="code" :class="{ expanded: state }" v-bind:aria-expanded="state ? 'true' : 'false'">
      <pre :class="'language' + lang"><code v-html="code"></code></pre>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'DocDemo',
  props: {
    id: String,
    file: String,
    lang: { type: String, default: 'html' },
  },
  mounted: function () {
    this.$http.get(this.file).then(result => {
      this.demo = result.body;
      this.code = Prism.highlight(result.bodyText.trim(), Prism.languages[this.lang], this.lang);
    });
  },
  data: function () {
    return {
      height: 0,
      demo: '',
      code: '',
      state: false,
    };
  },
};
</script>

<style lang="scss">
.demo-container {
  background: #fff;
  padding: 1rem;
}
.toggle-bar {
  display: flex;
  justify-content: flex-end;

  .btn {
    margin-right: 0;
    margin-bottom: 0;
  }
}
.code {
  max-height: 70px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  position: relative;

  .overlay {
    height: 70px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 1) 100%);
    opacity: 1;
    transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
  }
}
.code.expanding {
  overflow: hidden;
}
.code.expanded {
  overflow: scroll;
  max-height: 500px;

  .overlay {
    height: 0;
    opacity: 0;
  }
}
</style>
