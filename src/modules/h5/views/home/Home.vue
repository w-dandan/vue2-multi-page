<template>
  <div>
    this is h5 home page
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'Home',
    created() {
      console.log(_.join([1, 2, 3], '-'))
    }
  }
</script>

<style scoped>

</style>
