<template>
  <div class="post">
    <div class="post_top">
      <div class="post_top_intro">
        <div class="post_username"><router-link class="post_username_link" :to="{ name: 'utilisateur', params: { userId: idUser } }" >{{ username }}</router-link></div>
        <span>&nbsp;-&nbsp;</span>
        <div class="post_date">{{ date }}</div>
      </div>
      <div>
        <i @click="showEdit == false ? (showEdit = true) : (showEdit = false);showPostEdit()" class="fas fa-ellipsis-h post_edit fa-2x"></i>
        <ul class="post_edit_list" v-if="showEdit && edit">
          <li class="post_edit_list_item" @click="$emit('update')"><i class="fas fa-pen post_edit_list_item_icon"></i>Modifier</li>
          <li class="post_edit_list_item" @click="$emit('delete')"><i class="fas fa-trash-alt post_edit_list_item_icon"></i>Supprimer</li>
       </ul>
      </div>
    </div>
    <h2 class="post_title">{{ title }}</h2>
    <div class="post_content">{{ content }}</div>
    <div class="post_bottom">
      <div v-if="displayCommentLink()" class="post_comment">
        <router-link class="post_comment_link" :to="{ name: 'publication', params: { postId: id } }" ><i class="far fa-comment"></i> Commenter</router-link>
      </div>
      <div>
        <div @click="$emit('createLike')" class="post_like"><div>{{ like }}</div><i class="far fa-thumbs-up post_like_icon"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Post',
  props: {
    username: String,
    date: String,
    title: String,
    content: String,
    id: Number,
    idUser: Number,
    like: Number
  },
  data() {
    return {
      showEdit: false,
    };
  },
  computed: {
    ...mapState(['edit'])
  },
  methods: {
    ...mapActions(['showPostEdit']),
    displayCommentLink() {
      let display = false
      if(this.$route.name == 'home') {
        display = true
        return display
      }
      else { return display}
    }
  }
};
</script>

<style scoped lang="scss">
.post {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 15px 0;
  &_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &_intro {
      display: flex;
      align-items: center;
    }
  }
  &_username {
    font-family: $bold-text;
    &_link {
      text-decoration: none;
      color: $text-color;
    }
  }
  &_date {
    font-size: 14px;
  }
  &_edit {
    color: $grey;
    cursor: pointer;
    &:hover {
      color: darken($grey, 10%);
    }
    &_list {
      width: 150px;
      text-align: center;
      position: absolute;
      background: #fff;
      padding: 0;
      margin: 0;
      transform: translate(32px, -6px) translate(-100%);
      border: 1px solid $grey;
      border-radius: 6px;
      &_item {
        margin: 0 auto;
        cursor: pointer;
        list-style: none;
        padding: 10px 0;
        border-bottom: 1px solid $grey;
        &_icon {
          margin: 0 5px 0 0;
        }
      }
    }
  }
  &_title {
    font-family: $bold-text;
    font-size: 20px;
    margin: 0;
  }
  &_content {
    padding: 10px 0 15px 0;
    border-bottom: 1px solid $grey;
  }
  &_bottom {
    display: flex;
  }
  &_comment{
    padding: 8px 15px 0;
  }
  &_comment_link {
    text-decoration: none;
    color: $dark-grey;
    &:hover {
      color: darken($dark-grey, 10%);
    }
  }
  &_like {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: 8px 15px 0;
    color: $dark-grey;
    &:hover {
      color: darken($dark-grey, 10%);
    }
    &_icon {
      margin:0 0 0 3px;
    }
  }
}
</style>