<template>
  <div id="app">
    <formHelper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p> INformation about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit" > Submit </button>
      </div>
    </formHelper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";

export default {
  name: "app",
  components: {
    formHelper
  },
  data() {
    return {
      title: 'I am dynamic slot title'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
