<template>
  <div>
    this is main home page
  </div>
</template>

<script>
  import dayjs from 'dayjs'

  export default {
    name: 'Home',
    created() {
      console.log(dayjs().year())
    },
  }
</script>

<style scoped>

</style>
