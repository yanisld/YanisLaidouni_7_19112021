<template>
  <div>
      <div>{{profileName}}</div>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  data(){
    return {
      profileName: ''
    }
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
      this.profileName = item.value;
      return this.profileName
    }
  },
  created() {
    this.displayUsername();
  }
}
</script>

<style scoped lang="scss">

</style>