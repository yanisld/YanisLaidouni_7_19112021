<template>
  <div class="post">
      <div class="post-top">
        <div class="post_username">{{ username }}</div>
        <div class="post_date">{{ date }}</div>
      </div>
      <div class="post_title">{{ title }}</div>
      <div class="post_content">{{ content }}</div>
      <router-link class="post_link" :to="{ name: 'publication', params: { postId: id }}">Voir plus</router-link>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: { username: String, date: Date, title: String, content: String, id: Number}
}
</script>

<style scoped lang="scss">

</style>