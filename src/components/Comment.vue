<template>
  <div class="comment">
    <div class="comment_top">
      <div class="comment_top_intro">
        <div class="comment_username"><router-link class="comment_username_link" :to="{ name: 'utilisateur', params: { userId: idUser } }" >{{ username }}</router-link></div>
        <span>&nbsp;-&nbsp;</span>
        <div class="comment_date">{{ date }}</div>
      </div>
      <i @click="showEditComment == false ? (showEditComment = true) : (showEditComment = false)" class="fas fa-ellipsis-h comment_edit fa-2x"></i>
      <ul class="comment_edit_list" v-if="showEditComment">
        <li class="comment_edit_list_item" @click="$emit('update')"><i class="fas fa-pen comment_edit_list_item_icon"></i>Modifier</li>
        <li class="comment_edit_list_item" @click="$emit('delete')"><i class="fas fa-trash-alt comment_edit_list_item_icon"></i>Supprimer</li>
      </ul>
    </div>
    <div class="comment_content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return {
      showEditComment: false
    }
  },
  props: {
    username: String,
    date: String,
    content: String,
    idUser: Number
  },
};
</script>

<style scoped lang="scss">
.comment {
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
    }
  }
  &_username {
    font-family: $bold-text;
    &_link {
      text-decoration: none;
      color:$text-color;
    }
  }
  &_date {
    font-size:14px;
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
      transform: translate(200px, 52px) translate(172%);
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
  &_content {
    padding: 10px 0 15px 0;
    border-bottom: 1px solid $grey;
  }
}
</style>
