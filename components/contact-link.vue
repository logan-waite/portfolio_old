<template>
  <a :href="link" class="contact-link">
    <font-awesome-icon
      :icon="[brand ? 'fab' : 'far', icon]"
      size="2x"
      style="margin-right: 5px;"
    ></font-awesome-icon>
    <span>{{ text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    brand: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.contact-link {
  display: flex;
  align-items: center;
  margin: 10px 0px;
  flex: 0 0 100%;
}
</style>
