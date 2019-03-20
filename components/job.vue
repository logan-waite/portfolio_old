<template>
  <div class="job-wrapper">
    <div class="header">
      <!-- <div class="title">
        <h3>{{ job.position }}</h3>
        <hr />
      </div> -->
      <div class="detail">
        <span class="place">{{ job.place }}</span>
        <span class="time">
          <span class="start-date">{{ job.startYear }}</span>
          <span v-if="job.endYear !== undefined" class="end-date">
            - {{ job.endYear }}</span
          >
        </span>
      </div>
    </div>
    <div class="description">
      <ul>
        <li v-for="(bullet, index) in job.bullets" :key="index">
          {{ bullet }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.job-wrapper {
  /* display: flex; */
}
.detail {
  display: flex;
}
.place,
.time {
  font-size: 16px;
}

.place {
  margin-right: 10px;
}
</style>
