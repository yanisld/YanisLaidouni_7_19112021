<template>
  <div class="profile">
    <div class="profile_link" >{{ username }}</div>
    <i class="fas fa-user-circle fa-2x profile_img"></i>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  props: ['username'],
  methods: {
    getUserId() {
      const itemStr = localStorage.getItem('name');
      if (!itemStr) { return 0 }
      const item = JSON.parse(itemStr);
      return item.value.id;
    }
  }
}
</script>

<style scoped lang="scss">
.profile {
  display: flex;
  align-items: center;
  &_link {
    font-family: $bold-text;
    text-decoration: none;
    color: $text-color;
  }
  &_img {
    margin: 0 0 0 5px;
    color: $grey;
  }
}

</style>