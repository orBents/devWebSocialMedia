<template>
  <section class="main-create-account">
    <h1>Criar Conta</h1>
    <!-- 
        <form class="form-create-account">
            <input id="username" v-model="login.username" placeholder="Usuário">
            <input id="email" v-model="login.email" placeholder="Seu E-mail">
            <input id="password" v-model="login.password" placeholder="Senha">
            <input placeholder="Confirme sua senha">
            <button type="submit" class="button-light-blue" v-on:click="createAccount()">Criar Conta</button>
            <div class="message-login">
                <p>Já possui uma conta?</p>
                <a v-bind:href="'/sign-in/'">Log In</a>
            </div>            
        </form>
        -->

    <b-form
      @submit="onSubmit"
      @reset="onReset"
      v-if="show"
      class="form-create-account"
    >
      <b-form-group
        id="input-group-1"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Seu E-mail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Usuário"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Senha"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="button-light-blue"
        >Criar</b-button
      >
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <div class="message-login">
      <p>Já possui uma conta?</p>
      <a v-bind:href="'/sign-in/'">Log In</a>
    </div>
  </section>
</template>

<script>
/*
export default {
    
    name: "createAccount",
    data(){
        return{
            login:{
                username:"",
                email:"",
                password:""
            }
        };
    },
    
    methods: {
        
        
        createAccount() {

            let dataCreate = {
                userName: this.login.username,
                email: this.login.email,
                password: this.login.password,
            }
            this.$http.post("/user", dataCreate)
            .then(response =>{
               // console.log(this.$router);
                console.log(response.data);
                this.$router.push("/sign-in")
            })
            .catch(errors=>{
                console.log("Falha na criação!");
                alert("Falha na criação!");
                console.log(errors);
            });
        },
        

    }
    */

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: null,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.$http
        .post("/api/user", this.form)
        .then((response) => {
          // console.log(this.$router);
          console.log(response.data);
          this.$router.push("/sign-in");
        })
        .catch((errors) => {
          console.log("Falha na criação!");
          alert("Falha na criação!");
          console.log(errors);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.main-create-account {
  background-color: #212530;
  height: 95vh;
  width: 100%;
  display: flex !important;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.main-create-account h1 {
  font-weight: 700;
  margin: 0 0 2rem 0;
}
.form-create-account {
  width: fit-content;
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  flex-flow: column;
}
.form-create-account input {
  border: 0;
  border-radius: 16px;
  padding: 1rem 2rem;
  margin: 0.625rem;
  min-width: 327px;
}
.form-create-account a {
  color: #ffff;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 1rem 0 2rem 0;
}
.form-create-account a:hover {
  color: #2d9cdb;
}
.message-login {
  display: flex;
  margin: 1rem 0 0 0;
}
.message-login p {
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-right: 12px;
}
.message-login a {
  color: #2d9cdb;
}
</style>
