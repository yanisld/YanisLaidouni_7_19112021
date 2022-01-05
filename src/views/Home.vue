<template>
  <div class="post-list">
    <div class="add-post">
      <h1 class="add-post_title"><a @click="showModal=true">Créer une publication</a></h1>
    </div>
    <Post v-for="(post, index) in posts" v-bind:key="index" 
    :username="post.user.username"
    :date="formatDate(post.createdAt)"
    @update="showModalUpdate=true;postId=post.id;getPost(post.id)"
    @delete="deletePost(post.id)"
    :title="post.title"
    :content="post.content"
    :id="post.id"></Post>
  </div>
  <ModalPost v-if="showModal" @close="showModal=false" />
  <ModalUpdate v-if="showModalUpdate" @submit.prevent="updatePost(postId)" @close="showModalUpdate=false" />
</template>

<script>
import Post from "../components/Post.vue";
import ModalPost from "../components/ModalPost.vue";
import ModalUpdate from "../components/ModalUpdate.vue";
import { mapState } from 'vuex';
import { date, fetchGet, formData, fetchUpdate, fetchDelete, fetchGetOne } from "@/functions.js";
export default {
  name: "Home",
  data() {
    return {
      posts: null,
      showModal: false,
      showModalUpdate: false,
      postId: null
    }
  },
  components: {
    Post,
    ModalPost,
    ModalUpdate
  },
  computed: {
    ...mapState({postRoute: 'postRoute'})
  },
  methods: {
    async getAllPosts() {
      const data = await fetchGet(this.postRoute);
      if (data) {
        this.posts = data;
      }
      else {
        console.error('Erreur fetch');
      }
    },
    async getPost(id){
      const route = this.postRoute + id;
      const data = await fetchGetOne(route);
      let title = document.getElementById('modal-post_form_input_title');
      let text = document.getElementById('modal-post_form_input_text');
      if (data) {
        title.value = data.title;
        text.value = data.content;
      }
      else {
        console.error('Erreur fetch');
      }
    },
    async updatePost(id) {
        const form = document.querySelector("#modal-post_update-form");
        const body = formData(form);
        const route = this.postRoute + id;
        const fetch = await fetchUpdate(route, body);
        const result = fetch;
        console.log(result)
        if (result == true) {
          window.location.reload();
        }
        else {
          console.error('Erreur fetch');
        }
    },
    async deletePost(id) {
      try {
        const route = this.postRoute + id;
        await fetchDelete(route);
        window.location.reload();
      } catch(err) {
        console.error(err);
      }
    },
    formatDate(newDate){
      const formatedDate = date(newDate);
      return formatedDate;
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
