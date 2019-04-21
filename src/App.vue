<template>
  <div >
    <!-- <addBlog></addBlog> -->
    <showBlogs></showBlogs> 
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
export default {
  name: 'app',
  components: {
    addBlog,
    showBlogs
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
