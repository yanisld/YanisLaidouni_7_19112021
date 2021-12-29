<template>
  <div class="post-list">
    <Post v-for="(post, index) in posts" v-bind:key="index" 
    :username="post.user.username"
    :title="post.title"
    :content="post.content"
    :id="post.id"></Post>
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "Home",
  data() {
    return {
      posts: null
    }
  },
  components: {
    Post,
  },
  methods: {
    async getAllPosts() {
      try {
        const url = "http://localhost:3000/posts";
        const result = await fetch(url, { credentials: "include" });
        if (result.ok) {
          this.posts = await result.json();
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

<style scoped lang="scss">
</style>
