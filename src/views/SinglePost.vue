<template>
    <Post v-if="post"
    :username="post.user.username"
    :title="post.title"
    :content="post.content"
    :id="post.id"/>
</template>

<script>
import Post from '../components/Post.vue';

export default {
  name: 'SinglePost',
  components: {
    Post,
  },
  data() {
    return {
      post: null,
      route: null
    }
  },
  methods: {
    createRoute() {
      return this.route = this.$route.params.postId;
    },
    async getPost() {
      try {
        const url = "http://localhost:3000/posts/" + this.createRoute();
        console.log(url);
        const result = await fetch(url, { credentials: 'include' });
        if (result.ok) {
          this.post = await result.json();
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  created() {
    this.getPost();
  }
};
</script>

<style scoped lang="scss">
</style>
