<template>
  <div class="project-wrapper">
    <header>
      <h5 class="title">{{ title }}</h5>
      <div class="img-wrapper">
        <img
          :src="require(`~/assets/images/${img}`)"
          :alt="title + ' screenshot'"
        />
      </div>
    </header>
    <section>
      <span class="langs">
        <span
          v-for="(lang, index) in langs"
          :key="index"
          class="badge"
          :class="`badge-${lang.toLowerCase() || 'primary'}`"
          >{{ lang }}</span
        >
      </span>
      <a
        v-if="github !== ''"
        :href="`https://www.github.com/lwaite2010/${github}`"
        class="github-link"
      >
        <font-awesome-icon
          :icon="['fab', 'github-square']"
          size="2x"
        ></font-awesome-icon>
      </a>
      <p class="description">
        {{ description }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    langs: {
      type: Array,
      required: true
    },
    github: {
      type: [String],
      default: ''
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      test: '~/assets/images/accomplisher.png'
    }
  }
}
</script>

<style scoped>
.project-wrapper {
  /* border: 1px solid #aaa; */
  border-radius: 2px;
  padding: 0px;
  box-shadow: 2px 2px 10px 0px #aaa;
  margin: 10px;
  flex: 0 0 47%;
}

.title {
  position: absolute;
  color: white;
  z-index: 1;
  /* font-weight: bold; */
  font-size: 30px;
  margin: 10px;
  text-shadow: 2px 2px #555;
}

.img-wrapper {
  width: 100%;
  height: 90px;
  overflow: hidden;
}

img {
  width: 100%;
  filter: blur(2px) brightness(75%);
}

section {
  padding: 10px;
}

.github-link {
  float: right;
}

.badge {
  color: white;
  margin-right: 2px;
}

.badge-react {
  background-color: #61dafb;
}

.badge-vue {
  background-color: #41b883;
}

.badge-angular {
  background-color: #c3082e;
}

.badge-laravel {
  background-color: #f94f3b;
}

.badge-various {
  background-color: greenyellow;
  color: black;
}
</style>
