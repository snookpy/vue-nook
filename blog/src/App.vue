<template>
  <add-blog></add-blog>
</template>

<script>
import addBlog from "./components/addBlog.vue";

export default {
  name: "app",
  components: {
    "add-blog": addBlog
  }
};
</script>

<style>
</style>
