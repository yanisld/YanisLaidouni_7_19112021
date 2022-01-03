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
import Post from '../components/Post.vue';
import { mapState } from 'vuex';
import { date, fetchGet } from "@/functions.js";
export default {
  name: 'SinglePost',
  components: {
    Post,
  },
  data() {
    return {
      post: null,
      route: null,
    };
  },
    computed: {
    ...mapState({postRoute: 'postRoute'})
  },
  methods: {
    createRoute() {
      return (this.route = this.$route.params.postId);
    },
    async getPost() {
      const route = this.postRoute + this.createRoute();
      const fetch = await fetchGet(route);
      if (fetch) {
        this.post = fetch;
      }
      else {
        console.error('Erreur fetch');
      }
    },
    formatDate(newDate){
      const formatedDate = date(newDate);
      return formatedDate;
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
