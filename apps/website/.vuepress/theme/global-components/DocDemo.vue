<template>
  <div class="demo-container">
    Demo
    {{ sample }}
    <div class="toggle-bar">
      <button class="btn btn-primary btn-sm" v-if="!state" @click="state = !state">Show Code</button>
      <button class="btn btn-primary btn-sm" v-if="state" @click="state = !state">Hide Code</button>
    </div>
    <div class="code" v-if="state">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Api from '../../../data/api.json';

export default {
  name: 'DocDemo',
  data: function () {
    return {
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
</style>
