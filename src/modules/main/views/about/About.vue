<template>
  <div class="about">
    this is main about page
  </div>
</template>

<script>
  import dayjs from 'dayjs'

  export default {
    name: 'About',
    created() {
      console.log(dayjs().date())
    },
  }
</script>

<style scoped>

</style>
