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
          window.location.reload();
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
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  &_form {
    display: flex;
    flex-direction: column;
    width: 440px;
    position: relative;
    bottom: 200px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &_input {
      border-radius: 6px;
      font-size: 17px;
      padding: 14px 16px;
      margin: 8px 0;
      border: 1px solid $grey;
    }
    &_submit {
      @include button;
      margin: 5px 0 0 0;
      &:hover {
        background: darken($primary-color, 5%);
      }
    }
    &_close {
      background: $grey;
      font-family: $bold-text;
      margin: 5px 0 0 0;
      padding: 14px 0;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      &:hover {
        background: darken($grey, 5%);
      }
    }
  }
}
</style>