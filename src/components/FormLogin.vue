<template>
  <div class="login-page">
    <h1 class="intro">
      Partagez vos expériences et ressources avec vos collègues
    </h1>
    <form @submit.prevent="onSubmit" id="login-form" class="login-form">
      <input
        class="login-form_input"
        type="email"
        name="email"
        placeholder="Adresse Email"
      />
      <input
        class="login-form_input"
        type="text"
        name="password"
        placeholder="Mot de passe"
      />
      <input
        class="login-form_submit"
        id="login-form_submit"
        type="submit"
        value="Se connecter"
      />
      <div class="login-form_separator"></div>
      <router-link class="login-form_link" to="/inscription">S'inscrire</router-link>
    </form>
  </div>
</template>

<script>
import router from '../router/index';
export default {
  name: 'FormLogin',
  methods: {
    login() {
      const submit = document.querySelector("#login-form_submit");
      submit.addEventListener("click", async () => {
        const form = document.querySelector("#login-form");
        const formData = new FormData(form);
        let formInput = [];
        for (let value of formData.entries()) {
          formInput.push(value);
        }
        const login = Object.fromEntries(formInput);
        try {
          const url = "http://localhost:3000/users/connexion";
          const result = await fetch(url, {
            method: "POST",
            credentials: "include",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(login),
          });
          if (result.ok) {
            router.push({ name: 'home'});
          }
        } catch (err) {
          console.error(err);
        }
      });
    },
    link() {
      console.log('routage');
    }
  },
  mounted() {
    this.login();
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
  &_submit {
    @include button;
    margin: 8px 0 0 0;
    &:hover {
      background: darken($primary-color, 5%);
    }
  }
  &_separator {
    border: 1px solid $grey;
    margin: 30px 0;
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