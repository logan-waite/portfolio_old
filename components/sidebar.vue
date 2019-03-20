<template>
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
      <li>
        <a href="#contact" class="scrollactive-item">
          <font-awesome-icon :icon="['far', 'address-card']" />
          Contact
        </a>
      </li>
    </ul>
  </scrollactive>
</template>

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

li a.active {
  font-weight: bold;
}
</style>
