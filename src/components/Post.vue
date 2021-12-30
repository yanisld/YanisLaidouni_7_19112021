<template>
  <div class="post">
      <div class="post_top">
        <div class="post_username">{{ username }}</div>
        <div class="post_date">{{ date }}</div>
      </div>
      <h2 class="post_title">{{ title }}</h2>
      <div class="post_content">{{ content }}</div>
      <router-link class="post_link" :to="{ name: 'publication', params: { postId: id }}">Voir plus</router-link>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: { username: String, date: String, title: String, content: String, id: Number}
}
</script>

<style scoped lang="scss">
.post {
  background: #fff;
  border-radius: 6px;
  padding:15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 15px 0;
  &_top {
    margin: 0 0 10px 0;
  }
  &_username {
    font-family: $bold-text;
  }
  &_title {
    font-family: $bold-text;
    font-size:20px;
    margin: 0;
  }
  &_content {
    padding: 10px 0 15px 0;
    border-bottom: 1px solid $grey;
  }
}
</style>