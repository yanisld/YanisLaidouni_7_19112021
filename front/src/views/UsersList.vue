<template>
  <div class="users">
    <User v-for="(user, index) in users" v-bind:key="index"
    :id="user.id"
    :username="user.username"
    :email="user.email"
    :role="user.role.name"
    @update="showModal=true;getUserContent(user.id);userId=user.id"
    @delete="deleteUser(user.id)"
    />
    <ModalUpdateUser v-if="showModal" @close="showModal=false" @submit.prevent="updateUser(userId)" />
  </div>
</template>

<script>
import User from '@/components/User.vue'
import ModalUpdateUser from '@/components/ModalUpdateUser.vue'
import { formData, fetchGet, fetchDelete, fetchUpdate } from '@/functions.js'
import { mapState } from 'vuex'
export default {
  name: 'UsersList',
  data(){
      return {
          users: '',
          showModal: false,
          userId: ''
      }
  },
  components: {
    User,
    ModalUpdateUser
  },
  computed: {
    ...mapState(['userRoute'])
  },
  methods: {
    async getAllUsers(){
    try {
    const datas = await fetchGet(this.userRoute)
    this.users = datas
    }
    catch (err) { console.error(err) }
    },
    async deleteUser(id){
      try {
        const route = this.userRoute + id;
        await fetchDelete(route);
        this.getAllUsers()
      } 
      catch(err) { console.error(err) }
    },
    async getUserContent(id){
      try {
        const route = this.userRoute + id
        const data = await fetchGet(route)
        let username = document.getElementById('modal-user_form_username')
        let email = document.getElementById('modal-user_form_email')
        let password = document.getElementById('modal-user_form_password')
        username.value = data.username
        email.value = data.email
        password.value = data.password
      }
      catch (err) { console.error(err) }
    },
    async updateUser(id){
      const route = this.userRoute + id
      const form = document.querySelector('#modal-user_form')
      const body = formData(form)
      await fetchUpdate(route, body)
      this.showModal = false
      this.getAllUsers()
    }
  },
  created(){
      this.getAllUsers()
  }
}
</script>

<style scoped lang="scss">
.users {
  margin: 0 auto;
  max-width: 640px;
  padding: 20px 0 50px 0;
}
</style>