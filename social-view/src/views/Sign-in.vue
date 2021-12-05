<template>
  <section class="main-sign-in">
    <h1>Log In</h1>

    <form @submit="doLogin" class="form-sign-in">
      <input v-model="login.email" placeholder="email" />
      <input v-model="login.password" placeholder="senha" />
      <a v-bind:href="'/forget-password/'">ish, esqueceu sua senha</a>
      <button type="submit" v-bind:href="'/post/'" class="button-light-blue">Log In</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    doLogin(event) {
      event.preventDefault();
      
      axios
        .post("http://localhost:3030/api/login", this.login) //substituir depois por this.login
        .then((response) => {
          console.log(response.data);
          console.log(response);
          this.$router.push("/timeline");
        })
        .catch((error) => {
          console.error("Não foi possível realizar o Login");
          console.error(error);
        });
    },
  },
};
</script>

<style>
.main-sign-in {
  background-color: #212530;
  height: 95vh;
  width: 100%;
  display: flex !important;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.main-sign-in h1 {
  font-weight: 700;
}
.form-sign-in {
  width: fit-content;
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column;
}
.form-sign-in input {
  border: 0;
  border-radius: 16px;
  padding: 1rem 2rem;
  margin: 0.625rem;
  min-width: 327px;
}
.form-sign-in a {
  color: #ffff;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 1rem 0 2rem 0;
}
.form-sign-in a:hover {
  color: #2d9cdb;
}
</style>
