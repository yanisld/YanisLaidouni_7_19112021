<template>
  <Header />
  <main class="main">
    <Post />
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Post from "./components/Post.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Post,
    Footer,
  },
  methods: {
    async getAllPosts() {
      try {
        const url = '/posts/';
        const result = await fetch(url);
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
