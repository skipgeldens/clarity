<template>
  <nav class="clr-vertical-nav has-nav-groups">
    <div class="nav-content">
      <template v-for="(item, index) in items">
        <div class="nav-group" v-if="item.children">
          <div class="nav-group-content" v-bind:class="{ active: !states[index] && childActive(item) }">
            <button class="nav-group-trigger" type="button" @click="toggle(index)">
              <span class="nav-group-text">{{ item.title }}</span>
              <cds-icon class="nav-group-trigger-icon" shape="angle" :dir="states[index] ? 'down' : 'right'"></cds-icon>
            </button>
          </div>
          <div
            class="nav-group-children"
            v-bind:class="{ 'is-expanded': states[index] || activePage.path.startsWith(item.path) }"
            v-bind:style="{ height: states[index] ? `${item.children.length * 36}px` : '0' }"
          >
            <router-link
              class="nav-link"
              :to="childItem.path"
              v-for="childItem in item.children"
              v-bind:class="{ active: childItem.path === activePage.path || childActive(childItem) }"
            >
              <span class="nav-text">{{ childItem.title }}</span>
            </router-link>
          </div>
        </div>

        <router-link class="nav-link" v-if="!item.children" :to="item.path">
          <span class="nav-text">{{ item.title }}</span>
        </router-link>
      </template>
    </div>
  </nav>
</template>

<style lang="scss">
.nav-group-children {
  overflow-y: hidden;
  transition: height 0.2s ease-in-out;
}
.nav-group-trigger-icon {
  padding-top: 10px;
}
</style>

<script>
export default {
  name: 'Sidebar',

  data: function () {
    return {
      states: new Array(this.$props.items.length).fill(false),
    };
  },

  mounted() {
    if (this.childActive(this.$page)) {
      const parts = this.$page.path.split('/');
      const index = this.$props.items.findIndex(page => page.path.includes(parts[1]));
      this.toggle(index);
    }
  },

  computed: {
    activePage: function () {
      return this.$page;
    },
  },

  methods: {
    toggle: function (index) {
      // This is because Vue can't detect changes mutated on an array, so this alerts it of changes
      this.$set(this.states, index, !this.states[index]);
    },
    childActive: function (item) {
      let path = this.$page.path;
      let itemPath = item.path;
      if (path.endsWith('/')) {
        path = path.slice(0, -1);
      }
      if (itemPath.endsWith('/')) {
        itemPath = itemPath.slice(0, -1);
      }
      // This sets the parent to active if the children are collapsed
      return path === itemPath;
    },
  },

  props: ['items'],
};
</script>
