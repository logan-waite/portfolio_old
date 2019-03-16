<template>
  <div id="main">
    <sidebar></sidebar>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>

<style>
#main {
  display: flex;
  height: 100%;
}
</style>
