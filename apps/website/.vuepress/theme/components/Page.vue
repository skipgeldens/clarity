<template>
  <main class="page">
    <slot name="top" />
    <PageSubnav v-bind="{ sidebarItems }" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit';
import PageNav from '@theme/components/PageNav';
import PageSubnav from '@theme/components/PageSubnav';

export default {
  components: { PageEdit, PageNav, PageSubnav },
  props: ['sidebarItems'],
};
</script>

<style lang="scss">
.page {
  max-width: 50rem;
}
</style>
