<template>
  <div class="user_details">
      <ul>
          <li>{{ user.username }}</li>
          <li>{{ user.email }}</li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { fetchGet } from '@/functions.js';
export default {
  name: 'UserDetails',
  props: { username: String},
  data(){
      return {
          user: '',
          routeId: null
      }
  },
  computed: {
    ...mapState({userRoute: 'userRoute'})
  },
  methods: {
    createRoute() {
      return (this.routeId = this.$route.params.userId);
    },
    async getUser() {
      const route = this.userRoute + this.routeId; 
      const data = await fetchGet(route);
      if (data) {
        this.user = data;
      }
      else {
        console.error('Erreur fetch');
      }
    }
},
created() {
    this.createRoute();
    this.getUser();
}
}
</script>

<style scoped lang="scss">
.user_details {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 15px 0;
}
</style>
