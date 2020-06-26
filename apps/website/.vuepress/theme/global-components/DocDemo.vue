<template>
  <div class="demo-container" :id="id">
    <span v-html="demoHTML"></span>
    <div class="toggle-bar" v-if="showToggle">
      <button class="btn btn-primary btn-sm" v-if="!state" @click="state = !state">Show Code</button>
      <button class="btn btn-primary btn-sm" v-if="state" @click="state = !state">Hide Code</button>
    </div>
    <div class="code" :class="{ expanded: state }" v-bind:aria-expanded="state ? 'true' : 'false'">
      <pre :class="'language' + lang"><code v-html="codeHTML"></code></pre>
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
    src: String,
    demo: String,
    toggle: { type: Boolean | String, default: true },
    file: String | { file: String, lang: { type: String, default: 'html' } },
    lang: { type: String, default: 'html' },
  },
  mounted: function () {
    if (this.file) {
      this.$http.get(this.file).then(result => {
        this.demoHTML = result.body;
        this.codeHTML = Prism.highlight(result.bodyText.trim(), Prism.languages[this.lang], this.lang);
      });
    } else if (this.src && this.demo) {
      this.$http.get(this.src).then(result => {
        this.codeHTML = Prism.highlight(result.bodyText.trim(), Prism.languages[this.lang], this.lang);
      });
      this.$http.get(this.demo).then(result => {
        this.demoHTML = result.bodyText.trim();
      });
    } else {
      console.warn('doc-demo requires either a file property or both src and demo properties');
    }

    if (!this.toggle || (typeof this.toggle === 'string' && this.toggle.toLowerCase().trim() == 'false')) {
      this.state = true;
      this.showToggle = false;
    }
  },
  data: function () {
    return {
      showToggle: true,
      height: 0,
      demoHTML: '',
      codeHTML: '',
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
