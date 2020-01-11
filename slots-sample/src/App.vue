<template>
  <div id="app">
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
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
        <button > Submit </button>
      </div>
    </formHelper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
export default {
  name: "app",
  components: {
    'form-two':formTwo,
    'form-one':formOne,
    formHelper,
  },
  data() {
    return {
      title: 'I am dynamic slot title',
      component: 'form-one'
    }
  },
  methods: {

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
