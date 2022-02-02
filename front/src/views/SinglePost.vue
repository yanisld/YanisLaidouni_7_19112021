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
      :like="getLike(post.like)"
      @createLike="createLike(post.id, post.like)"
    />
    <div class="comments">
      <div class="add-comment">
        <form id="add-comment-form" class="add-comment_form" @submit.prevent="addComment">
          <input type="text" name="content" id="add-comment_form_input" class="add-comment_form_input" placeholder="Commentaire" required>
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
import router from '@/router/index'
import Post from '@/components/Post.vue'
import ModalUpdate from '@/components/ModalUpdate.vue'
import ModalComment from '@/components/ModalComment.vue'
import Comment from '@/components/Comment.vue'
import { mapState, mapActions } from 'vuex'
import { date, fetchGet, formData, fetchPost, fetchUpdate, fetchDelete } from '@/functions.js'
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
    }
  },
  computed: {
    ...mapState({postRoute: 'postRoute'})
  },
  methods: {
    ...mapActions(['closeEdit']),
    createRoute() {
      return (this.routeId = this.$route.params.postId);
    },
    async getPost() {
      try {
        const route = this.postRoute + this.routeId;
        const data = await fetchGet(route);
        this.post = data;
      }
      catch (err) { console.error(err) }
    },
    async getPostContent(id){
      try {
        const route = this.postRoute + id;
        const data = await fetchGet(route);
        let title = document.getElementById('modal-post_form_input_title');
        let text = document.getElementById('modal-post_form_input_text');
        title.value = data.title;
        text.value = data.content;
      }
      catch (err) { console.error(err) }
    },
    async updatePost(id) {
      try {
        const form = document.querySelector('#modal-post_update-form');
        const body = formData(form);
        const route = this.postRoute + id;
        await fetchUpdate(route, body);
        this.getPost()
        this.showModal = false
      }
      catch (err) { console.error(err) }
    },
    async deletePost(id) {
      try {
        const route = this.postRoute + id;
        await fetchDelete(route);
        router.push({ name: 'home' });
      } 
      catch(err) { console.error(err) }
    },
    async getComment() {
      try {
        const route = this.postRoute + this.routeId + '/comments';
        const datas = await fetchGet(route);
        this.comments = datas;
      }
      catch(err) { console.error(err) }
    },
    async addComment() {
      try {
        const form = document.querySelector('#add-comment-form');
        const input = document.querySelector('#add-comment_form_input')
        const body = formData(form);
        const route = this.postRoute + this.routeId + '/comment';
        await fetchPost(route, body);
        this.getComment()
        input.value = null
      }
      catch(err) { console.error(err) }
    },
    async getCommentContent(id){
      try {
        const route = this.postRoute + this.routeId + '/comment/' + id;
        const data = await fetchGet(route);
        let text = document.getElementById('modal-comment_form_input_text');
        text.value = data.content;
      }
      catch(err) { console.error(err) }
    },
    async updateComment(id) {
      try {
        const form = document.querySelector('#modal-comment_update-form');
        const body = formData(form);
        const route = this.postRoute + this.routeId + '/comment/' + id;
        await fetchUpdate(route, body);
        this.getComment();
        this.showModalComment = false
        this.closeEdit()
      }
      catch(err) { console.error(err) }
    },
    async deleteComment(id) {
      try {
        const route = this.postRoute + this.routeId + '/comment/' + id;
        await fetchDelete(route);
        this.getComment();
      } 
      catch(err) { console.error(err) }
    },
    getLike(tab) {
      let count = 0
      for(let like of tab){
        if(like.value == 1){ count+=1 }
        else if(like.value == 0){ count-=1 }
      }
      return count
    },
    async createLike(id){
      try {
        const route = this.postRoute + id + '/like/'
        const body = { value: 1 }
        await fetchPost(route, body);
      }
      catch(err) { console.error(err) }
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
