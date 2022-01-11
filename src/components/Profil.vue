<template>
  <div>
    <details>
      <summary><router-link class="post_link" :to="{ name: 'utilisateur', params: { userId: getUserId() } }" >{{ username }}</router-link></summary>
    </details>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  props: ['username'],
  methods: {
    getUserId() {
      const itemStr = localStorage.getItem('name');
      if (!itemStr) { return null }
      const item = JSON.parse(itemStr);
      return item.value.id;
    }
  }
}
</script>

<style scoped lang="scss">

</style>