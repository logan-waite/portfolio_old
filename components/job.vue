<template>
  <div class="job-wrapper">
    <div class="header">
      <div class="title">
        <h3>Job Title</h3>
        <hr />
      </div>
      <div class="detail">
        <span class="place">Place</span>
        <span class="time">
          <span class="start-date">1/1/01</span> -
          <span class="end-date">1/1/01</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.job-wrapper {
  /* display: flex; */
}

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
