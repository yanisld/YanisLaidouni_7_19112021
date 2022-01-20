<template>
  <div class="user_details">
      <ul class="user_details_list">
          <li class="user_details_list_item"><form id="user_details_username" @submit.prevent="updateUsername">
            <input type="text" id="user_details_username_input" class="user_details_input" name="username" required />
            <button type="submit" class="user_details_btn">Modifier</button></form>
          </li>
          <li class="user_details_list_item"><form id="user_details_email" @submit.prevent="updateEmail">
            <input type="text" name="email" id="user_details_email_input" class="user_details_input" required />
            <button type="submit" class="user_details_btn">Modifier</button></form>
          </li>
      </ul>
      <details class="user_details_password">
        <summary class="user_details_password_summary">Modifier le mot de passe</summary>
          <form id="user_details_password" @submit.prevent="updatePassword">
            <input type="password" name="password" class="user_details_password_input" required />
            <button type="submit" class="user_details_password_btn">Modifier</button>
          </form>
      </details>
      <div class="user_details_bottom">
        <button class="user_details_btn_logout" @click="logout()">Déconnexion</button>
        <button class="user_details_btn_delete" @click="deleteUser(routeId)">Supprimer mon compte</button>
      </div>
  </div>
</template>

<script>
import router from '../router/index'
import { mapState, mapActions } from 'vuex'
import { formData, fetchGet, fetchDelete, fetchUpdate } from '@/functions.js'
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
    ...mapActions(['forceRerender']),
    createRoute() {
      return (this.routeId = this.$route.params.userId);
    },
    async getUser() {
      try {
        const route = this.userRoute + this.routeId; 
        const data = await fetchGet(route);
        document.querySelector('#user_details_username_input').value = data.username;
        document.querySelector('#user_details_email_input').value = data.email;
        this.user = data;
      }
      catch(err) { console.error(err) }
    },
    async updateUsername() {
      try {
        const form = document.querySelector('#user_details_username');
        const body = formData(form);
        const route = this.userRoute + this.routeId;
        await fetchUpdate(route, body);
        let storage = JSON.parse(localStorage.getItem('name'));
        if(storage.value.role != 'moderator'){
          localStorage.removeItem('name');
          storage.value.username = body.username;
          localStorage.setItem('name', JSON.stringify(storage));
        }
        window.location.reload();
      }
      catch(err) { console.error(err) }
    },
    async updateEmail() {
      try {
        const form = document.querySelector('#user_details_email');
        const body = formData(form);
        const route = this.userRoute + this.routeId;
        await fetchUpdate(route, body);
        window.location.reload();
      } 
      catch(err) { console.error(err) }
    },
    async updatePassword() {
      try {
        const form = document.querySelector('#user_details_password');
        const body = formData(form);
        const route = this.userRoute + this.routeId;
        await fetchUpdate(route, body);
        window.location.reload();
      } 
      catch(err) { console.error(err) }
    },
    async logout() {
      try {
        const route = this.userRoute + '/deconnexion';
        localStorage.removeItem('name');
        await fetchGet(route);
        this.forceRerender();
        router.push({ name: 'login' });
      } 
      catch(err) { console.error(err) }
    },
    async deleteUser(id) {
      try {
        const route = this.userRoute + id;
        await fetchDelete(route);
        localStorage.removeItem('name');
        this.forceRerender();
        router.push({ name: 'login' });
      } 
      catch(err) { console.error(err) }
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
  &_list {
    margin: 0;
    padding: 0;
    &_item {
    list-style: none;
    padding: 10px 0;
    & input {
      @include modalInput
    }
    }
  }
  &_password {
    font-family: $bold-text;
    & > summary::-webkit-details-marker {
      display:none;
    }
    &_summary {
      list-style: none;
      cursor: pointer;
    }
    &_input {
      @include modalInput
    }
    &_btn {
      @include button;
      margin: 0 0 0 10px;
      &:hover {
      background-color: darken($primary-color, 10%);
      }
    }
  }
  &_bottom {
    display: flex;
    flex-direction: column;
  }
  &_btn {
    @include button;
    margin: 0 0 0 10px;
    &:hover {
      background-color: darken($primary-color, 10%);
    }
    &_logout {
      width: 150px;
      margin: 20px 0;
      @include button;
      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
    &_delete {
      background: $grey;
      width: 220px;
      border: none;
      border-radius: 6px;
      color: $text-color;
      font-family: "latobold", Arial, sans-serif;
      padding: 14px 16px;
      cursor: pointer;
      &:hover {
        background: darken($grey, 10%);
      }
    }
  }
}
@media screen and (max-width: 374px) {
  .user_details_list_item {
    margin: 0 0 10px 0
  }
  .user_details_list_item input,
  .user_details_password_input {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
  .user_details_btn,
  .user_details_password_btn{
    margin: 0;
    width: 100%;
    padding: 10px 16px;
  }
  .user_details_password {
    margin: 20px 0;
  }
  .user_details_btn_logout,
  .user_details_btn_delete {
    width:100%;
  }
}
</style>
