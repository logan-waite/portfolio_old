<template>
  <main class="col-md-9">
    <div>
      <overview />
      <projects />
      <work-history />
      <contact />
    </div>
  </main>
</template>

<script>
import Overview from '~/components/overview'
import Projects from '~/components/projects'
import WorkHistory from '~/components/work-history'
import Contact from '~/components/contact'

export default {
  components: {
    Overview,
    Projects,
    WorkHistory,
    Contact
  }
}
</script>

<style>
main {
  height: 100%;
  overflow-y: auto;
}
</style>
