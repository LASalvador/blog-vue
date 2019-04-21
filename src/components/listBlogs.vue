<template>
  <div id="show-blogs">
      <h1>List Blogs Titles</h1>
      <input type="text" v-model="search" placeholder="search blogs"></input>
      <div v-theme="wide" v-for="(blog,i) in filteredBlogs" :key="i"  class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </div>
  </div>
</template>

<script>
import searchMinix from '../mixis/searchMixis.js';
export default {
  name: 'showBlogs',
  components: {
  },
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  computed: {
      // filteredBlogs: function() {
      //   return this.blogs.filter((blog) => {
      //     return blog.title.match(this.search);
      //   });
  },
  filters: {
    toUppercase (value) {
      return value.toUpperCase();
    },
    'snnippet': function(value) {
      return value.slice(0, 100) + '...';
    }

  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      }
    }
  },
  mixins: [ searchMinix ],
  methods: {

  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0,10);
    })
  }
}
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing:  border-box;
  background: #eee;
}
</style>
