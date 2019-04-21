<template>
  <div id="show-blogs">
      <h1>All Blogs Articles</h1>
      <input type="text" v-model="search" placeholder="search blogs"></input>
      <div v-theme="wide" v-for="(blog,i) in filteredBlogs" :key="i"  class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
        <article>{{ blog.body | snnippet }}</article>
      </div>
  </div>
</template>

<script>
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
      filteredBlogs: function() {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
  },
  filters: {

  },
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
