<template>
  <div class="modal-post">
    <form id="modal-post_form" class="modal-post_form" @submit.prevent="addPost">
      <input
        class="modal-post_form_input"
        type="text"
        name="title"
        placeholder="Titre"
      />
      <textarea
        class="modal-post_form_input"
        name="content"
        placeholder="Texte"
      />
      <input type="submit" class="modal-post_form_submit" value="Publier" />
      <button class="modal-post_form_close" @click="$emit('close')">
        Annuler
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formData, fetchPost } from "@/functions.js";
export default {
  name: "ModalPost",
    computed: {
    ...mapState({ postRoute: "postRoute" }),
  },
  methods: {
    async addPost() {
        const form = document.querySelector("#modal-post_form");
        const body = formData(form);
        const fetch = await fetchPost(this.postRoute, body);
        const result = fetch;
        if (result == true) {
          console.log('hello')
          //window.location.reload();
        }
        else {
          console.error('Erreur fetch');
        }
    }
  }
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