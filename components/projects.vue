<template>
  <section id="projects">
    <h1>Projects</h1>
    <div class="projects">
      <project
        v-for="(project, index) in projects"
        :key="index"
        :title="project.title"
        :img="project.img"
        :langs="project.langs"
        :github="project.github"
        :description="project.description"
      />
    </div>
  </section>
</template>

<script>
import Project from '~/components/project'
export default {
  components: {
    Project
  },
  data() {
    return {
      projects: [
        {
          title: 'Accomplisher',
          img: 'accomplisher.png',
          langs: ['React.js'],
          github: 'accomplisher-web',
          description: 'a description of the accomplisher app'
        },
        {
          title: 'Book Hero',
          img: 'book-hero.png',
          langs: ['Laravel', 'Vue.js'],
          github: 'bookhero',
          description: 'a description of Book Hero'
        },
        {
          title: 'Catalog',
          img: 'catalog.png',
          langs: ['Vue.js'],
          description: 'a description of Catalog'
        },
        {
          title: 'iTOVi Dashboard',
          img: 'itovi-dashboard.png',
          langs: ['AngularJS'],
          description: 'a description of iTOVi dashboard'
        },
        {
          title: 'iTOVi Checkout',
          img: 'itovi-checkout.png',
          langs: ['Vue.js'],
          description: 'a description of iTOVi Checkout'
        },
        {
          title: 'Exercism',
          img: 'exercism.png',
          langs: ['Various'],
          github: 'exercism',
          description: 'a description of Exercism'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
