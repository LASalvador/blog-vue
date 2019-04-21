<template>
  <div >
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
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
