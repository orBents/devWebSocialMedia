<template>
    <section class="main-sign-in">
        <h1>Log In</h1>

        <form class="form-sign-in">
            <input v-model="email" placeholder="email">
            <input v-model="senha" placeholder="senha">
            <a v-bind:href="'/forget-password/'">ish, esqueceu sua senha</a>
            <button class="button-light-blue">Log In</button>
        </form>
    </section>
   
</template>

<script>
export default {
    name: "SingIn",
};
</script>

<style>
    .main-sign-in{
        background-color: #212530;
        height: 95vh;
        width: 100%;
        display: flex !important;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }
    .main-sign-in h1{
        font-weight: 700;        
    }
    .form-sign-in{
        width: fit-content;
        display: flex !important;  
        align-items: center;      
        justify-content: flex-end;
        flex-flow: column;   
    }
    .form-sign-in input{
        border:0;
        border-radius: 16px;
        padding: 1rem 2rem;
        margin: 0.625rem;
        min-width: 327px;
    }
    .form-sign-in a{
        color: #FFFF;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin: 1rem 0 2rem 0; 
    }
    .form-sign-in a:hover{
        color: #2D9CDB;
    }
</style>