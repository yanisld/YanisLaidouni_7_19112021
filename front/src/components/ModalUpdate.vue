<template>
  <div class="modal-post">
    <form id="modal-post_update-form" class="modal-post_form">
      <input id="modal-post_form_input_title" class="modal-post_form_input" type="text" name="title" required />
      <textarea id="modal-post_form_input_text" class="modal-post_form_input" name="content" required />
      <input type="submit" class="modal-post_form_submit" value="Modifier" />
      <button class="modal-post_form_close" @click="$emit('close')">Annuler</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModalUpdate',
};
</script>

<style scoped lang="scss">
.modal-post {
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