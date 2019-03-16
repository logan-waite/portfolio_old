<template>
  <nav class="col-3">
    <header>
      <h2>Logan Waite</h2>
      <small>Web Developer</small>
    </header>

    <ul>
      <li>
        <font-awesome-icon :icon="['far', 'book-user']" />
        Overview
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'drafting-compass']" />
        Projects
      </li>
      <li>
        <font-awesome-icon :icon="['far', 'briefcase']" />
        Work History
      </li>
      <!-- <li>
        <font-awesome-icon :icon="['far', 'rocket']" />
        Cool Things
      </li> -->
      <li>
        <font-awesome-icon :icon="['far', 'address-card']" />
        Contact
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  /* position: fixed; */
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
</style>
