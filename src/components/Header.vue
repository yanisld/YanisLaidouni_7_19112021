<template>
  <header class="header">
      <img src="../assets/images/groupomania-logo-rouge.png" alt="logo groupomania">
      <Profil />
  </header>
</template>

<script>
import Profil from '@/components/Profil.vue'
export default {
  name: 'Header',
  components: {
    Profil
  },
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.175);
    padding: 10px 20px;
}
</style>
