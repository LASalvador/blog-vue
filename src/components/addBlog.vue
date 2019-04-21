<template>
  <div id="add-blog">
    <h2>Add a new Blog</h2>
    <form>
      <label>Blog Title</label>
      <input type="text" required name="Title" v-model.lazy="blog.title"></input>
      <label>Blog Content</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>Ninjas</label>
        <input type="checkbox" value="Ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="Wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="Mario" v-model="blog.categories">
        <label>Lucas </label>
        <input type="checkbox" value="Lucas" v-model="blog.categories">
      </div>
      <label>Autor:</label>
      <select v-model="blog.author">
        <option v-for="(author,i) in authors" :key="i">{{ author }}</option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      Thanks to post your blog
    </div>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title: {{ blog.title}} </p>
        <p>Categories:</p>
        <ul>
          <li v-for="(cat,i) in blog.categories" :key="i" >{{ cat }}</li>
        </ul>
        <p>Blog Author: {{blog.author}}</p>
        <p>Blog Content: </p>
        <p>{{ blog.content}} </p>
      </div>
    </div>
  </template>
  </div>

<script>


export default {
  name: 'addBlog',
  components: {
  },
  data() {
    return {
      blog: {
        title:'',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Lucas', 'Porps','Sonne'],
      submitted: false
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        titile: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data) {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-right: 10px;
}
</style>
