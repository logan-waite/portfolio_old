<template>
  <div>
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
  </div>
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
}
</style>
