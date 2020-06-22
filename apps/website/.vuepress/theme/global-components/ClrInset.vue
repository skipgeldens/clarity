<template>
  <div class="inset" :style="{ height: getHeight() }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ClrInset',
  methods: {
    getHeight: function () {
      return this.height + 'px';
    },
  },
  props: ['height'],
};
</script>

<style scoped>
.inset {
  background: #e8e8e8;
  border-radius: 3px;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
