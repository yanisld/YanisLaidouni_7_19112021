<template>
  <div>
    <details>
      <summary>{{ username }}</summary>
      <div @click="logout()">Déconnexion</div>
    </details>
  </div>
</template>

<script>
import router from '@/router/index'
import { mapState } from 'vuex'
import { fetchGet } from "@/functions.js"
export default {
  name: 'Profil',
  props: ['username'],
   computed: {
    ...mapState({userRoute: 'userRoute'})
  },
  methods: {
    async logout() {
      const route = this.userRoute + '/deconnexion';
      localStorage.removeItem('name');
      await fetchGet(route);
      router.push({ name: 'login' });
    }
  }
}
</script>

<style scoped lang="scss">

</style>