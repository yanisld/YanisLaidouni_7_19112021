<template>
  <header>
      <img src="../assets/groupomania-logo-noir.png" alt="logo groupomania">
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
    display: flex;
}
</style>
