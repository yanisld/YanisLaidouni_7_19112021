<template>
  <div class="single-post">
    <Post
      v-if="post"
      :username="post.user.username"
      :date="formatDate(post.createdAt)"
      :title="post.title"
      :content="post.content"
      :id="post.id"
    />
  </div>
</template>

<script>
import Post from "../components/Post.vue";

export default {
  name: "SinglePost",
  components: {
    Post,
  },
  data() {
    return {
      post: null,
      route: null,
    };
  },
  methods: {
    createRoute() {
      return (this.route = this.$route.params.postId);
    },
    async getPost() {
      try {
        const url = "http://localhost:3000/posts/" + this.createRoute();
        const result = await fetch(url, { credentials: "include" });
        if (result.ok) {
          this.post = await result.json();
        }
      } catch (err) {
        console.error(err);
      }
    },
    formatDate(date){
      const format = new Date(date);
      return Intl.DateTimeFormat('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'}).format(format)
    }
  },
  created() {
    this.getPost();
  },
};
</script>

<style scoped lang="scss">
.single-post {
  margin: 0 auto;
  max-width: 640px;
  padding: 50px 0;
}
</style>
