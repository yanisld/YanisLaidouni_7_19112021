<template>
  <div class="modal-user">
    <form id="modal-user_form" class="modal-user_form">
      <input id="modal-user_form_username" class="modal-user_form_input" type="text" name="username" required />
      <input id="modal-user_form_email" class="modal-user_form_input" type="text" name="email" required />
      <input id="modal-user_form_password" class="modal-user_form_input" type="text" name="password" required />
      <input type="submit" class="modal-user_form_submit" value="Modifier" />
      <button class="modal-user_form_close" @click="$emit('close')">Annuler</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModalUpdateUser',
}
</script>

<style scoped lang="scss">
.modal-user {
  @include modal;
  &_form {
    @include modalForm;
    &_input {
      @include modalInput;
    }
    &_submit {
      @include button;
      margin: 5px 0 0 0;
      &:hover {
        background: darken($primary-color, 5%);
      }
    }
    &_close {
      @include modalClose;
      &:hover {
        background: darken($grey, 5%);
      }
    }
  }
}
</style>