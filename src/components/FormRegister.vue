<template>
  <div class="register-page">
    <h1 class="intro">
      Partagez vos expériences et ressources avec vos collègues
    </h1>
    <form @submit.prevent="register" id="register-form" class="register-form">
      <input
        class="register-form_input"
        type="text"
        name="username"
        placeholder="Nom d'utilisateur"
        required
      />
      <input
        class="register-form_input"
        type="email"
        name="email"
        placeholder="Adresse Email"
        required
      />
      <input
        class="register-form_input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
      />
      <input
        class="register-form_submit"
        id="register-form_submit"
        type="submit"
        value="S'incrire"
      />
    </form>
  </div>
</template>

<script>
import router from "../router/index";
import { mapState } from "vuex";
import { formData, fetchPost } from "@/functions.js";
export default {
  name: "FormRegister",
  computed: {
    ...mapState({ userRoute: "userRoute" }),
  },
  methods: {
    async register() {
      const form = document.querySelector("#register-form");
      const body = formData(form);
      const route = this.userRoute + "inscription";
      await fetchPost(route, body);
      router.push({ name: "login" });
    },
  },
};
</script>

<style scoped lang="scss">
.register-page {
  padding: 100px 0;
}
.intro {
  font-family: $title;
  margin: 0 0 50px 0;
  text-align: center;
}
.register-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  &_input {
    border-radius: 6px;
    font-size: 17px;
    padding: 14px 16px;
    margin: 8px 0;
    border: 1px solid $grey;
  }
  &_submit {
    @include button;
    margin: 8px 0 0 0;
    &:hover {
      background: darken($primary-color, 5%);
    }
  }
}
</style>