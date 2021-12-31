<template>
  <div class="post-list">
    <div class="add-post">
      <h1 class="add-post_title"><a @click="showModal=true">Créer une publication</a></h1>
    </div>
    <Post v-for="(post, index) in posts" v-bind:key="index" 
    :username="post.user.username"
    :date="formatDate(post.createdAt)"
    :title="post.title"
    :content="post.content"
    :id="post.id"></Post>
  </div>
  <ModalPost v-if="showModal" @close="showModal=false" />
</template>

<script>
import Post from "../components/Post.vue";
import ModalPost from "../components/ModalPost.vue";

export default {
  name: "Home",
  data() {
    return {
      posts: null,
      showModal: false
    }
  },
  components: {
    Post,
    ModalPost
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
    formatDate(date){
      const format = new Date(date);
      return Intl.DateTimeFormat('fr-FR', {day: 'numeric', month: 'long', year: 'numeric'}).format(format)
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>

<style scoped lang="scss">
.add-post {
  background: #fff;
  border-radius: 6px;
  padding:15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 15px 0;
  &_title {
    font-family: $bold-text;
    font-size:20px;
    margin: 0;
  }
}
.post-list {
  margin: 0 auto;
  max-width: 640px;
  padding: 20px 0 50px 0;
}
</style>
