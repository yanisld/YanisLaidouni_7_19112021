<template>
  <div class="comment">
    <div class="comment_top">
      <div class="comment_username">{{ username }} - {{ date }}</div>
      <i @click="showEditComment == false ? (showEditComment = true) : (showEditComment = false)" class="fas fa-plus post_edit"></i>
      <div class="edit" v-if="showEditComment">
        <div class="edit_update" @click="$emit('update')">
          <div><i class="fas fa-pen"></i></div>
          <div>Modifier</div>
        </div>
        <div class="edit_delete" @click="$emit('delete')">
          <div><i class="fas fa-trash-alt"></i></div>
          <div>Supprimer</div>
        </div>
      </div>
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
    margin: 0 0 10px 0;
  }
  &_username {
    font-family: $bold-text;
  }
  /*&_edit {
    color: $grey;
    cursor: pointer;
    &:hover {
      color: darken($grey, 10%);
    }
  }*/
  &_content {
    padding: 10px 0 15px 0;
    border-bottom: 1px solid $grey;
  }
}
</style>
