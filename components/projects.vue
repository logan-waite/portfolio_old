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
          title: 'Book Hero',
          img: 'book-hero.png',
          langs: ['Vue', 'Django'],
          description:
            "Book Hero is an opportunity for me to apply what I've been learning about gamification. I wanted to give people quick feedback about how what they were reading was making them better people, and this was the idea I came up with."
        },
        {
          title: 'Accomplisher Mobile',
          img: 'accomplisher-mobile.png',
          langs: ['React Native'],
          description:
            'Moving the Accomplisher idea to mobile using React Native. I built the inital app in one week as a deep dive into React Native.'
        },
        {
          title: 'Accomplisher',
          img: 'accomplisher.png',
          langs: ['React'],
          github: 'accomplisher-web',
          description:
            'The Accomplisher app is an attempt at making goal setting more rewarding by making the accomplished goals a major part of the experience. I also wanted to introduce some gaming elements to make setting and accomplishing goals more fun.'
        },
        {
          title: 'Book Hero Prototype',
          img: 'book-hero-prototype.png',
          langs: ['Laravel', 'Vue'],
          github: 'bookhero',
          description:
            'This is a prototype for Book Hero, when I was learning Laravel and Vue. I was able to test with a small audience and learned how to improve the user experience.'
        },
        {
          title: 'Catalog',
          img: 'catalog.png',
          langs: ['Vue'],
          description:
            'I built the front-end app for Catalog. The idea was to create a personality tool that would allow others to better understand who you were in the workplace.'
        },
        {
          title: 'iTOVi Dashboard',
          img: 'itovi-dashboard.png',
          langs: ['Angular'],
          description:
            'The user dashboard for iTOVi was in need of a overhaul, both graphically and under the hood. I worked with a graphic designer to craft the experience, and re-architected and built the final product.'
        },
        {
          title: 'iTOVi Checkout',
          img: 'itovi-checkout.png',
          langs: ['Vue'],
          description:
            'I was the owner of the checkout at iTOVi. I designed and built the first iteration using vanilla javascript and jQuery, and eventually rebuilt it using Vue off of designs from a marketing firm.'
        },
        {
          title: 'Exercism',
          img: 'exercism.png',
          langs: ['Various'],
          github: 'exercism',
          description:
            'Exercism is a collection of coding exercises. The platform is not something that I built, but I have done multiple exercises to further improve my mastery of multiple languages.'
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
  margin: 0px 10px;
}
</style>
