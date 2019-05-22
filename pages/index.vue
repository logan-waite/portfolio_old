<template>
  <main>
    <div>
      <overview />
      <projects />
      <work-history />
    </div>
  </main>
</template>

<script>
import Overview from '~/components/overview'
import Projects from '~/components/projects'
import WorkHistory from '~/components/work-history'
// import Contact from '~/components/contact'

export default {
  components: {
    Overview,
    Projects,
    WorkHistory
    // Contact
  }
}
</script>

<style scoped>
main {
  height: 100%;
  overflow-y: auto;
}
section {
  padding-top: 50px;
}

section:last-child {
  margin-bottom: 30px;
}
</style>
