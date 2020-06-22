<template>
  <div>
    <hr />
    <h2>
      {{ version }}
      <a class="release-date" :href="commitLink" target="_blank"
        >Released {{ commitDate }} <cds-icon class="external-link" size="12" shape="pop-out"></cds-icon
      ></a>
    </h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Release',
  props: ['version', 'date', 'commit'],
  computed: {
    commitLink: function () {
      return `https://github.com/vmware/clarity/commit/${this.commit}`;
    },
    commitDate: function () {
      const date = new Date(this.date);
      return `${date.toDateString()}`;
    },
    items: function () {
      const items = {};
      this.$slots.default.forEach(vnode => {
        if (!items[vnode.componentOptions.propsData.type]) {
          items[vnode.componentOptions.propsData.type] = 0;
        }

        items[vnode.componentOptions.propsData.type]++;
      });
      return items;
    },
  },
};
</script>

<style scoped>
.release-date {
  font-size: 0.8rem;
  float: right;
}
hr {
  margin-top: 2rem;
}
.external-link {
  margin-top: -0.5rem;
}
</style>
