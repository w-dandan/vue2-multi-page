<template>
  <div class="home">
    this is pc home page
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Home',
    mounted() {
      console.log($('home'))
    }
  }
</script>

<style scoped>

</style>
