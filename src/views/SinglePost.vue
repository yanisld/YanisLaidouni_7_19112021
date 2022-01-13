<template>
  <div class="single-post">
    <Post
      v-if="post"
      :idUser="post.user.id"
      :username="post.user.username"
      :date="formatDate(post.createdAt)"
      @update="showModal=true;IdPost=post.id;getPostContent(post.id)"
      @delete="deletePost(post.id)"
      :title="post.title"
      :content="post.content"
      :id="post.id"
    />
    <div class="comments">
      <div class="add-comment">
        <form id="add-comment-form" class="add-comment_form" @submit.prevent="addComment">
          <input type="text" name="content" class="add-comment_form_input" placeholder="Commentaire" required>
          <button type="submit" class="add-comment_form_btn">Commenter</button>
        </form>
      </div>
      <Comment
        v-for="(comment, index) in comments" v-bind:key="index"
        :idUser="comment.user.id"
        :username="comment.user.username"
        :date="formatDate(comment.createdAt)"
        @delete="deleteComment(comment.id)"
        @update="showModalComment=true;commentId=comment.id;getCommentContent(comment.id)"
        :content="comment.content"
      />
    </div>
    <ModalUpdate v-if="showModal" @submit.prevent="updatePost(IdPost)" @close="showModal=false" />
    <ModalComment v-if="showModalComment" @submit.prevent="updateComment(commentId)" @close="showModalComment=false" />
  </div>
</template>

<script>
import router from "@/router/index";
import Post from '@/components/Post.vue';
import ModalUpdate from "../components/ModalUpdate.vue";
import ModalComment from '@/components/ModalComment.vue';
import Comment from '@/components/Comment.vue';
import { mapState } from 'vuex';
import { date, fetchGet, formData, fetchPost, fetchUpdate, fetchDelete } from "@/functions.js";
export default {
  name: 'SinglePost',
  components: {
    Post,
    Comment,
    ModalUpdate,
    ModalComment
  },
  data() {
    return {
      post: null,
      comments: null,
      routeId: null,
      showModal: false,
      IdPost: null,
      showModalComment: false,
      commentId: null
    };
  },
    computed: {
    ...mapState({postRoute: 'postRoute'})
  },
  methods: {
    createRoute() {
      return (this.routeId = this.$route.params.postId);
    },
    async getPost() {
      const route = this.postRoute + this.routeId;
      const data = await fetchGet(route);
      if (data) {
        this.post = data;
      }
      else {
        console.error('Erreur fetch publication');
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
        router.push({ name: 'home' });
      } catch(err) {
        console.error(err);
      }
    },
    async getComment() {
      const route = this.postRoute + this.routeId + '/comments';
      const datas = await fetchGet(route);
      if (datas) {
        this.comments = datas;
      }
      else {
        console.error('Erreur fetch commentaires');
      }
    },
    async addComment() {
        const form = document.querySelector("#add-comment-form");
        const body = formData(form);
        const route = this.postRoute + this.routeId + '/comment';
        await fetchPost(route, body);
        window.location.reload();
    },
    async getCommentContent(id){
      const route = this.postRoute + this.routeId + '/comment/' + id;
      const data = await fetchGet(route);
      let text = document.getElementById('modal-comment_form_input_text');
      if (data) {
        text.value = data.content;
      }
      else {
        console.error('Erreur fetch');
      }
    },
    async updateComment(id) {
        const form = document.querySelector("#modal-comment_update-form");
        const body = formData(form);
        const route = this.postRoute + this.routeId + '/comment/' + id;
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
    async deleteComment(id) {
      try {
        const route = this.postRoute + this.routeId + '/comment/' + id;
        await fetchDelete(route);
        window.location.reload();
      } catch(err) {
        console.error(err);
      }
    },
    formatDate(newDate){
      const formatedDate = date(newDate);
      return formatedDate;
    }
  },
  created() {
    this.createRoute();
    this.getPost();
    this.getComment();
  },
};
</script>

<style scoped lang="scss">
.single-post {
  margin: 0 auto;
  max-width: 640px;
  padding: 50px 0;
}
.add-comment {
  background: #fff;
  border-radius: 6px;
  padding:15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 15px 0;
  &_form {
    display: flex;
    flex-direction: column;
    &_input {
      @include modalInput
    }
    &_btn {
      @include button;
      &:hover {
      background-color: darken($primary-color, 10%);
      }
    }
  }
}
</style>
