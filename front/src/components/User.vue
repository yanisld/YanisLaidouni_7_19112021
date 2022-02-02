<template>
    <div class="users_details">
        <div class="users_details_top">
            <div class="users_details_top_content">
              <div class="users_details_top_content_label">Id</div>
              <div>{{ id }}</div>
            </div>
            <div class="users_details_top_content">
              <div class="users_details_top_content_label">Nom d'utilisateur</div>
              <div >{{ username }}</div>
            </div>
            <div class="users_details_top_content">
              <div class="users_details_top_content_label">Email</div>
              <div>{{ email }}</div>
            </div>
            <div class="users_details_top_content">
              <div class="users_details_top_content_label">Rôle</div>
              <div>{{ role }}</div>
            </div>  
        </div>
        <div class="users_details_bottom">
            <button @click="$emit('update')" type="button" class="users_details_bottom_update">Modifier</button>
            <button @click="$emit('delete')" type="button" class="users_details_bottom_delete">Supprimer</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'User',
  props: { id: Number, username: String, email: String, password: String, role: String}
}
</script>

<style scoped lang="scss">
.users_details {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 0 15px 0;
  &_top {
    display: flex;
    flex-wrap: wrap;
      &_content {
        display: flex;
        flex-direction: column;
        border: 1px solid $grey;
        &_label {
          font-family: $bold-text;
        }
      }
      & div {
        padding: 10px 15px;
        
      }
  }
  &_bottom {
      margin: 20px 0 0 0;
      &_update {
        @include button;
      }
      &_delete {
        margin: 0 0 0 20px;
        background: #dddfe2;
        border: none;
        border-radius: 6px;
        color: $text-color;
        font-family: $bold-text;
        padding: 14px 16px;
        cursor: pointer;
      }
  }
}
</style>