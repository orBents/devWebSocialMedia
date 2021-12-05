<template>
  <section class="main">
    <section class="layer">
      <div class="header">
        <h1>Conecte-se</h1>
        <p>Conecte-se com seus grupos</p>
      </div>
      <form class="form-home">
        <a class="button-light-blue" v-bind:href="'#/sign-in/'">Log In</a>
        <a class="button-white" v-bind:href="'#/create-account/'"
          >Criar Conta</a
        >
      </form>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style>
.layer {
  background-color: rgb(33, 37, 48, 0.82);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 10% 0 0 0;
  display: flex !important;
  justify-content: space-between;
  flex-flow: column;
}
.main {
  background-image: url("../../public/phone-light.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.button-light-blue {
  cursor: pointer;
  text-decoration: none;
  margin: 0.625rem;
  padding: 1rem 2rem;
  min-width: 327px;
  width: fit-content;
  background-color: #2d9cdb;
  border: none;
  border-radius: 16px;
  color: #ffff;
  font-size: 1rem;
}
.button-white {
  text-decoration: none;
  cursor: pointer;
  margin: 0.625rem;
  padding: 1rem 2rem;
  min-width: 327px;
  width: fit-content;
  background-color: #ffff;
  border: none;
  border-radius: 16px;
  color: #031925;
  font-size: 1rem;
}
.form-home {
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column;
  padding: 0 0 8% 0;
}
.main h1 {
  font-weight: 700;
  font-size: 2.75rem;
}

.main p {
  font-weight: 400;
  font-size: 1rem;
}
</style>
