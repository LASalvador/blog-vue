<template>
  <div >
    <addBlog></addBlog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  name: 'app',
  components: {
    addBlog
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
