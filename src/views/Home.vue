<template>
  <Post />
</template>

<script>
import Post from '../components/Post.vue';

export default {
  name: 'Home',
  components: {
    Post
  },
  methods: {
    async getAllPosts() {
      try {
        const url = 'http://localhost:3000/posts';
        const result = await fetch(url, {credentials: 'include'});
        if (result.ok) {
          const posts = await result.json();
          console.log(posts);
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
      this.getAllPosts();
  },
};
</script>

<style scoped lang="scss">
</style>
