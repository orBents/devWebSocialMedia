<template>
    <section class="main-create-account">
        <h1>Criar Conta</h1>

        <form class="form-create-account">
            <input id="username" v-model="login.username" placeholder="Usuário">
            <input id="email" v-model="login.email" placeholder="Seu E-mail">
            <input id="password" v-model="login.password" placeholder="Senha">
            <input placeholder="Confirme sua senha">
            <button class="button-light-blue" v-on:click="createAccount()">Criar Conta</button>
            <div class="message-login">
                <p>Já possui uma conta?</p>
                <a v-bind:href="'/sign-in/'">Log In</a>
            </div>            
        </form>
    </section>
   
</template>

<script>
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
        
        createAccount(event) {

            event.preventDefault();

            let dataCreate = {
                userName: this.login.username,
                email: this.login.email,
                password: this.login.password,
            }
            this.$http.post("/user", dataCreate)
            .then(response =>{
               // console.log(this.$router);
                console.log(response.data);
                this.$router.push("/")
            })
            .catch(errors=>{
                console.log("Falha no Cadastro!");
                alert("Falha no cadastro!");
                console.log(errors);
            });
        },
    }
};

</script>

<style>
    .main-create-account{
        background-color: #212530;
        height: 95vh;
        width: 100%;
        display: flex !important;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }
    .main-create-account h1{
        font-weight: 700;  
        margin: 0 0 2rem 0;      
    }
    .form-create-account{
        width: fit-content;
        display: flex !important;  
        align-items: center;      
        justify-content: flex-end;
        flex-flow: column;   
    }
    .form-create-account input{
        border:0;
        border-radius: 16px;
        padding: 1rem 2rem;
        margin: 0.625rem;
        min-width: 327px;
    }
    .form-create-account a{
        color: #FFFF;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin: 1rem 0 2rem 0; 
    }
    .form-create-account a:hover{
        color: #2D9CDB;
    }
    .message-login{
        display: flex;
        margin: 1rem 0 0 0;
    }
    .message-login p{
        display: flex;
        align-items: center;
        white-space: nowrap;
        margin-right: 12px;       
    }
    .message-login a{
        color: #2D9CDB;
    }
</style>