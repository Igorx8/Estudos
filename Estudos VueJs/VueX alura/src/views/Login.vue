<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" v-model="usuario.senha">
            </div>
            <button type="submit" class="btn btn-primary btn-block">Entrar</button>
            <router-link :to="{name:'cadastro.usuario'}">
                Não possui um cadastro, cadastre-se aqui!
            </router-link>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
    data(){

        return{
            usuario: {
                email: '',
                senha: ''
            }
        }
    },

    methods: {
        efetuarLogin(){
            axios.post('http://localhost:8000/auth/login', this.usuario)
            .then(response => console.log(response))
            .catch((response) => console.log(response))
        }
    }
}
</script>