<template>
  <div class="post-list">
    <div class="add-post">
      <h1 class="add-post_title"><a @click="showModal=true">Créer une publication</a></h1>
    </div>
    <Post v-for="(post, index) in posts" v-bind:key="index"
    :idUser="post.user.id"
    :username="post.user.username"
    :date="formatDate(post.createdAt)"
    @update="showModalUpdate=true;IdPost=post.id;getPostContent(post.id)"
    @delete="deletePost(post.id)"
    :title="post.title"
    :content="post.content"
    :id="post.id"
    :like="getLike(post.like)"
    @createLike="createLike(post.id, post.like)"></Post>
  </div>
  <ModalPost v-if="showModal" @close="showModal=false" @addPost="addPost()" />
  <ModalUpdate v-if="showModalUpdate" @submit.prevent="updatePost(IdPost)" @close="showModalUpdate=false" />
</template>

<script>
import Post from "../components/Post.vue";
import ModalPost from "../components/ModalPost.vue";
import ModalUpdate from "../components/ModalUpdate.vue";
import { mapState, mapActions } from 'vuex';
import { date, fetchGet, formData, fetchPostData, fetchUpdate, fetchDelete } from "@/functions.js";
export default {
  name: "Home",
  data() {
    return {
      posts: null,
      showModal: false,
      showModalUpdate: false,
      IdPost: null
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
    ...mapActions(['closeEdit']),
    getLike(tab) {
      let count = 0
      for(let like of tab){
        if(like.value == 1){
          count+=1
        }
        else if(like.value == 0){
          count-=1
        }
      }
      return count
    },
    async createLike(id){
      const route = this.postRoute + id + '/like/'
      const body = { value: 1 }
      await fetchPostData(route, body);
    },
    async getAllPosts() {
      const data = await fetchGet(this.postRoute);
      if (data) {
        this.posts = data;
      }
      else {
        console.error('Erreur fetch');
      }
    },
    async getPostContent(id){
      const route = this.postRoute + id;
      const data = await fetchGet(route);
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
    async addPost() {
        const form = document.querySelector("#modal-post_form");
        const body = formData(form);
        await fetchPostData(this.postRoute, body);
        this.getAllPosts();
        this.showModal = false
    },
    async updatePost(id) {
        const form = document.querySelector("#modal-post_update-form");
        const body = formData(form);
        const route = this.postRoute + id;
        const fetch = await fetchUpdate(route, body);
        const result = fetch;
        console.log(result)
        if (result == true) {
          this.getAllPosts();
          this.showModalUpdate = false;
          this.closeEdit()
        }
        else {
          console.error('Erreur fetch');
        }
    },
    async deletePost(id) {
      try {
        const route = this.postRoute + id;
        await fetchDelete(route);
        this.getAllPosts();
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
    cursor: pointer;
    font-family: $bold-text;
    font-size:20px;
    margin: 0;
    &:hover {
      color: $dark-grey;
    }
  }
}
.post-list {
  margin: 0 auto;
  max-width: 640px;
  padding: 20px 0 50px 0;
}
</style>
