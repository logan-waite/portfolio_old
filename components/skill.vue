<template>
  <div class="skill">
    <h5 :style="{ color }">{{ name }}</h5>
    <div class="progress">
      <div class="progress-bar-wrapper" :style="{ width: `${width}%` }">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="progress-bar"
          role="progressbar"
          :style="{
            backgroundColor: section.color || randomColor(),
            flex: `${section.amount}`
          }"
          :aria-valuenow="`${section.width}`"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ section.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const COLORS = [
  'crimson',
  'darkred',
  'indianred',
  'gold',
  'darkorange',
  'limegreen',
  'forestgreen',
  'darkgreen',
  'seagreen',
  'olive',
  'darkturquoise',
  'teal',
  'blue',
  'magenta',
  'slategrey',
  'tan',
  'peru',
  'brown'
]

export default {
  props: {
    sections: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#007bff'
    },
    width: {
      type: Number,
      required: true
    }
  },
  methods: {
    randomColor() {
      return COLORS[Math.floor(Math.random() * COLORS.length) + 1]
    }
  }
}
</script>

<style scope>
.skill {
  flex: 0 0 100%;
  margin: 10px;
}
.progress {
  height: 20px;
  border-radius: 1rem;
}
.progress-bar-wrapper {
  display: flex;
}
.progress-bar:last-child {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
</style>
