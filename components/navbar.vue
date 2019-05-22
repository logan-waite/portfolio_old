<template>
  <div id="navbar">
    <scrollactive active-class="active">
      <logo></logo>
      <ul class="links">
        <li>
          <a href="#overview" class="scrollactive-item">
            Overview
          </a>
        </li>
        <li>
          <a href="#projects" class="scrollactive-item">
            Projects
          </a>
        </li>
        <li>
          <a href="#history" class="scrollactive-item">
            Work History
          </a>
        </li>
      </ul>
      <!-- <font-awesome-icon
        class="menu"
        :icon="['far', 'bars']"
        size="lg"
        @click="showMenu = !showMenu"
      /> -->
      <!-- <div class="contact">
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
      </div> -->
    </scrollactive>
  </div>
</template>

<script>
// import ContactLink from '~/components/contact-link'
import Logo from '~/components/logo'
export default {
  components: {
    // ContactLink
    Logo
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style scoped>
#navbar {
  position: fixed;
  left: 0px;
  right: 0px;
  background-color: white;
  box-shadow: 2px 2px 2px #aaa;
  z-index: 10;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

li {
  margin-right: 20px;
  /* font-size: 20px; */
}

li a {
  color: black;
}

li a.active {
  font-weight: bold;
}

.contact {
  position: absolute;
  bottom: 0px;
  margin-bottom: 25px;
}

.menu {
  display: none;
  margin: 15px;
}

@media screen and (max-width: 450px) {
  .menu {
    display: flex;
  }

  .links {
    display: none;
  }
}
</style>
