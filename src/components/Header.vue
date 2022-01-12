<template>
  <header class="header">
      <img src="../assets/images/groupomania-logo-rouge.png" alt="logo groupomania">
      <Profil :username="displayUsername()" :key="componentKey" />
  </header>
</template>

<script>
import Profil from '@/components/Profil.vue'
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      
    }
  },
  components: {
    Profil
  },
  computed: {
        ...mapState(['componentKey'])
  },
  methods: {
    displayUsername(){
      const itemStr = localStorage.getItem('name');
      if (!itemStr) { return null }
      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item.expiry) {
        localStorage.removeItem('name');
        return null
      }
      return item.value.username;
    },
  }
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: 2;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.175);
    padding: 10px 20px;
}
</style>
