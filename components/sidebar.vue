<template>
  <div>
    <scrollactive active-class="active" class="col-3">
      <header>
        <h2>Logan Waite</h2>
        <small>Web Developer</small>
      </header>
      <ul>
        <li>
          <a href="#overview" class="scrollactive-item">
            <font-awesome-icon :icon="['far', 'book-user']" />
            Overview
          </a>
        </li>
        <li>
          <a href="#projects" class="scrollactive-item">
            <font-awesome-icon :icon="['far', 'drafting-compass']" />
            Projects
          </a>
        </li>
        <li>
          <a href="#history" class="scrollactive-item">
            <font-awesome-icon :icon="['far', 'briefcase']" />
            Work History
          </a>
        </li>
        <!-- <li>
        <font-awesome-icon :icon="['far', 'rocket']" />
        Cool Things
      </li> -->
        <!-- <li>
          <a href="#contact" class="scrollactive-item">
            <font-awesome-icon :icon="['far', 'address-card']" />
            Contact
          </a>
        </li> -->
      </ul>
      <div class="contact">
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
    </scrollactive>
  </div>
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
nav {
  position: fixed;
  height: 100%;
  border-right: 1px solid blue;
  padding-left: 25px;
}

header {
  margin: 20px 0px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 10px 0px;
  font-size: 20px;
}

li a {
  color: black;
}

li a.active {
  font-weight: bold;
}

.contact {
  position: relative;
  bottom: 0px;
}
</style>
