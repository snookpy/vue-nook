<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form action>
      <label for>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />

      <label for>Blog Content:</label>
      <textarea name v-model.lazy="blog.content" id cols="30" rows="10"></textarea>
      <div id="checkboxes">
        <label for>Ninjas</label>
        <input value="ninjas" type="checkbox" v-model="blog.catagories" />
        <label for>Wizards</label>
        <input value="wizards" type="checkbox" v-model="blog.catagories" />
        <label for>Mario</label>
        <input value="mario" type="checkbox" v-model="blog.catagories" />
        <label for>Cheese</label>
        <input value="cheese" type="checkbox" v-model="blog.catagories" />
      </div>
    </form>
    <div class="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="category in blog.catagories" :key="category">{{ category }}</li>
      </ul>
    </div>
    <label for>Author:</label>
    <select v-model="blog.author">
      <option v-for="author in authors" :key="author">{{author}}</option>
    </select>
    <p>Author: {{blog.author}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        catagories: [],
        author: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Cindicator"]
    };
  }
};
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>