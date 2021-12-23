<template>
  <header class="header">
      <img src="../assets/images/groupomania-logo-rouge.png" alt="logo groupomania">
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    position: relative;
    z-index: 2;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.175);
    padding: 10px 20px;
}
</style>
