<template>
  <div>
    <div class="title">
      <h3>{{ position.title }}</h3>
      <hr />
    </div>
    <job v-for="(job, index) in position.places" :key="index" :job="job"></job>
  </div>
</template>

<script>
import Job from '~/components/job'
export default {
  components: {
    Job
  },
  props: {
    position: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.title {
  display: flex;
  align-items: center;
}
.title h3 {
  margin-right: 10px;
}
hr {
  flex: 1;
  border: 1px solid blue;
}
</style>
