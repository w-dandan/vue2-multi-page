<template>
  <div class="about">
    this is h5 about page
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'About',
    created() {
      console.log(_.join([2, 3, 4], '--'))
    },
  }
</script>

<style scoped>

</style>
