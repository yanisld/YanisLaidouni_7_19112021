<template>
  <div class="post">
    <div class="post_top">
      <div class="post_username"><router-link class="post_link" :to="{ name: 'utilisateur', params: { userId: idUser } }" >{{ username }}</router-link></div>
      <div class="post_date">{{ date }}</div>
      <i @click="showEdit == false ? (showEdit = true) : (showEdit = false)" class="fas fa-plus post_edit"></i>
      <div class="edit" v-if="showEdit">
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
    <h2 class="post_title">{{ title }}</h2>
    <div class="post_content">{{ content }}</div>
    <router-link class="post_link" :to="{ name: 'publication', params: { postId: id } }" >Voir plus</router-link>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    username: String,
    date: String,
    title: String,
    content: String,
    id: Number,
    idUser: Number
  },
  data() {
    return {
      showEdit: false,
    };
  },
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
    margin: 0 0 10px 0;
  }
  &_username {
    font-family: $bold-text;
  }
  &_edit {
    color: $grey;
    cursor: pointer;
    &:hover {
      color: darken($grey, 10%);
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
}
</style>