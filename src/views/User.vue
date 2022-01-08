<template>
  <div class="user">
    <UserDetails />
  </div>
</template>

<script>
import UserDetails from "@/components/UserDetails.vue";
export default {
  name: 'User',
  components: {
    UserDetails,
  }
};
</script>

<style lang="scss">
.user {
  margin: 0 auto;
  max-width: 640px;
  padding: 50px 0;
}
</style>