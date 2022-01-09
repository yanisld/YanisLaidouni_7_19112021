<template>
  <div class="user_details">
      <ul>
          <li><form id="user_details_username" @submit.prevent="updateUsername"><input type="text" id="user_details_username_input" name="username" />
          <button type="submit">Modifier</button></form></li>
          <li><form id="user_details_email" @submit.prevent="updateEmail"><input type="text" name="email" id="user_details_email_input" />
          <button type="submit">Modifier</button></form></li>
      </ul>
      <details>
        <summary>Modifier le mot de passe</summary>
          <form id="user_details_password" @submit.prevent="updatePassword"><input type="password" name="password"><button type="submit">Modifier</button></form>
      </details>
      <button @click="deleteUser(routeId)">Supprimer mon compte</button>
  </div>
</template>

<script>
import router from "../router/index";
import { mapState } from 'vuex';
import { formData, fetchGet, fetchDelete, fetchUpdate } from '@/functions.js';
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
        document.querySelector('#user_details_username_input').value = data.username;
        document.querySelector('#user_details_email_input').value = data.email;
        this.user = data;
      }
      else {
        console.error('Erreur fetch');
      }
    },
    async updateUsername() {
        const form = document.querySelector('#user_details_username');
        const body = formData(form);
        const route = this.userRoute + this.routeId;
        const fetch = await fetchUpdate(route, body);
        const result = fetch;
        if (result == true) {
          window.location.reload();
        }
        else {
          console.error('Erreur fetch');
        }
    },
    async updateEmail() {
        const form = document.querySelector('#user_details_email');
        const body = formData(form);
        const route = this.userRoute + this.routeId;
        const fetch = await fetchUpdate(route, body);
        const result = fetch;
        if (result == true) {
          window.location.reload();
        }
        else {
          console.error('Erreur fetch');
        }
    },
    async updatePassword() {
        const form = document.querySelector('#user_details_password');
        const body = formData(form);
        const route = this.userRoute + this.routeId;
        const fetch = await fetchUpdate(route, body);
        const result = fetch;
        if (result == true) {
          window.location.reload();
        }
        else {
          console.error('Erreur fetch');
        }
    },
    async deleteUser(id) {
      try {
        const route = this.userRoute + id;
        await fetchDelete(route);
        localStorage.removeItem('name');
        router.push({ name: 'login' });
      } catch(err) {
        console.error(err);
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
