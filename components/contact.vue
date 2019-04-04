<template>
  <section id="contact">
    <h1>Contact</h1>
    <div class="rolodex-card">
      <contact-link
        icon="github-square"
        link="https://github.com/lwaite2010"
        text="Github"
      ></contact-link>
      <contact-link
        icon="linkedin"
        link="https://www.linkedin.com/in/logan-j-waite/"
        text="Linkedin"
      ></contact-link>
      <contact-link
        :brand="false"
        icon="envelope"
        link="mailto:info@loganwaite.com"
        text="Email"
      ></contact-link>
    </div>
  </section>
</template>

<script>
import ContactLink from '~/components/contact-link'
export default {
  components: {
    ContactLink
  }
}
</script>

<style scoped>
.rolodex-card {
  background-color: white;
  border: 1px solid grey;
  border-radius: 0.5rem;
  width: 75%;
  margin: 50px auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
