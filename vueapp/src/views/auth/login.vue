<template>
<v-container fill-height>
    <v-row justify="center" align="center">
        <v-card color="#fdffe6" class="pa-16 login-card">
            <v-form @submit="onSubmit">
                <p class="display-1">{{$t("Login")}}</p>
                <v-text-field v-model="username" :label='$t("Username")' type="text"></v-text-field>
                <v-text-field v-model="password" :label='$t("Password")' type="password"></v-text-field>
                <v-container>
                    <v-row align="center">
                        <RouterLink :to='{ name:"CreateAccount" }'>
                                {{$t("CreateAccount")}}
                        </RouterLink>
                        <v-spacer></v-spacer>
                        <v-btn color="success" type="submit">{{$t("Login")}}</v-btn>
                        <v-btn @click="logUser"> logs</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { User } from '@/plugins/inversify/interfaces/models/user';
import utils from '@/plugins/utils';
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class Login extends Vue {

    @State( state => state.auth.user )
    //@ts-ignore
    private readonly user:User|null;

    private username:string = "";
    private password:string = "";

    onSubmit(e:Event){
        e.preventDefault();
        if(this.valid){
            this.$store.dispatch("auth/login",{
                username:this.username,
                password:this.password
            })
        }
    }

    logUser(){
        console.log(this.user);
        console.log(this.$store.state.auth);
    }

    get valid(){
        return this.username.length > 0 && this.password.length > 0;
    }

    getUrl(url:string){
        return utils.getUrl(url);
    }
}
</script>

<style scoped>
.login-card{
    width:30em;
    height: 25em;
}
</style>