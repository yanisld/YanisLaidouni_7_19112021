<template>
  <div class="login-page">
    <h1 class="intro">
      Partagez vos expériences et ressources avec vos collègues
    </h1>
    <form @submit.prevent="login" id="login-form" class="login-form">
      <input
        class="login-form_input"
        type="email"
        name="email"
        placeholder="Adresse Email"
        required
      />
      <input
        class="login-form_input"
        type="password"
        name="password"
        placeholder="Mot de passe"
        required
      />
      <div v-if="auth" class="login-form_feedback"><span>Indentifiant ou mot de passe incorrect</span></div>
      <input
        class="login-form_submit"
        id="login-form_submit"
        type="submit"
        value="Se connecter"
      />
      <div class="login-form_separator"></div>
      <router-link class="login-form_link" to="/inscription"
        >S'inscrire</router-link
      >
    </form>
  </div>
</template>

<script>
import router from "../router/index";
import { mapState, mapActions } from "vuex";
import { formData, fetchPost } from "@/functions.js";
export default {
  name: "FormLogin",
  data() {
    return {
      auth: false
    }
  },
  computed: {
    ...mapState({ userRoute: "userRoute" }),
  },
  methods: {
    ...mapActions(['forceRerender']),
    async login() {
      const form = document.querySelector("#login-form");
      const body = formData(form);
      const route = this.userRoute + "connexion";
      const result = await fetchPost(route, body);
      if(result){
        this.forceRerender();
        router.push({ name: "home" });
      }
      else {
        this.auth = true
      }
      
    },
  },
};
</script>

<style scoped lang="scss">
.login-page {
  padding: 100px 0;
}
.intro {
  font-family: $title;
  margin: 0 0 50px 0;
  text-align: center;
}
.login-form {
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
  &_feedback {
    text-align: center;
    color: $primary-color;
  }
  &_submit {
    @include button;
    margin: 8px 0 0 0;
    &:hover {
      background: darken($primary-color, 5%);
    }
  }
  &_separator {
    @include separator;
  }
  &_link {
    background: $grey;
    padding: 14px 16px;
    border-radius: 6px;
    font-size: 17px;
    text-decoration: none;
    color: #000;
    font-family: $bold-text;
    text-align: center;
    &:hover {
      background: darken($grey, 5%);
    }
  }
}
</style>