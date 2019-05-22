<template>
  <div id="main" class="col-12">
    <!-- <sidebar></sidebar> -->
    <navbar></navbar>
    <nuxt></nuxt>
  </div>
</template>

<script>
import Navbar from '~/components/navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#main {
  display: flex;
  /* height: 100%; */
}
</style>
