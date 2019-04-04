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
            backgroundColor: section.color || usedColors[index],
            flex: `${section.amount}`
          }"
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
  data() {
    return {
      usedColors: []
    }
  },
  /* eslint-disable no-console */
  created() {
    for (let i = 0; i < this.sections.length; i++) {
      const color = this.randomColor()
      if (this.usedColors.includes(color))
        this.usedColors.push(this.randomColor())
      else this.usedColors.push(color)
    }
  },
  methods: {
    randomColor() {
      return COLORS[Math.floor(Math.random() * (COLORS.length - 1)) + 1]
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
