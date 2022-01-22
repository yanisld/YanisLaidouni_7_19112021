<template>
  <div class="users">
    <User v-for="(user, index) in users" v-bind:key="index"
    :id="user.id"
    :username="user.username"
    :email="user.email"
    :role="user.role.name"
    @update="showModal=true"
    @delete="deleteUser(user.id)"
    />
    <ModalUpdateUser v-if="showModal" @close="showModal=false"/>
  </div>
</template>

<script>
import User from '@/components/User.vue'
import ModalUpdateUser from '@/components/ModalUpdateUser.vue'
import { fetchGet, fetchDelete } from '@/functions.js'
import { mapState } from 'vuex'
export default {
  name: 'UsersList',
  data(){
      return {
          users: '',
          showModal: false
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