<template>
  <div class="modal-comment">
    <form id="modal-comment_update-form" class="modal-comment_form">
      <textarea
        id="modal-comment_form_input_text"
        class="modal-comment_form_input"
        name="content"
        required
      />
      <input type="submit" class="modal-comment_form_submit" value="Modifier" />
      <button class="modal-comment_form_close" @click="$emit('close')">
        Annuler
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalComment",
};
</script>

<style scoped lang="scss">
.modal-comment {
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