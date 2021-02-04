<template>
<v-container fill-height>
    <v-row justify="center" align="center">
        <v-card color="#fdffe6" class="pa-16 create-account-card">
            <v-form @submit="onSubmit">
                <p class="display-1">{{$t("CreateAccount")}}</p>
                <v-text-field v-model="firstname" :label='$t("Firstname")' type="text"></v-text-field>
                <v-text-field v-model="surname" :label='$t("Surname")' type="text"></v-text-field>
                <v-text-field v-model="username" :label='$t("Username")' type="text"></v-text-field>
                <v-text-field v-model="password" :label='$t("Password")' type="password"></v-text-field>
                <v-text-field v-model="repeatPassword" :label='$t("RepeatPassword")' type="password"></v-text-field>
                <v-container>
                    <v-row align="center">
                        <RouterLink :to='{ name:"Login" }'>
                                {{$t("Login")}}
                        </RouterLink>
                        <v-spacer></v-spacer>
                        <v-btn color="success" type="submit">{{$t("CreateAccount")}}</v-btn>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { User } from '@/plugins/inversify/interfaces/models/user';
import Vue from 'vue'
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({})
export default class CreateAccount extends Vue{

    @State(state => state.auth.user)
    //@ts-ignore
    private readonly user:User;

    private firstname:string = "";
    private surname:string = "";
    private username:string = "";
    private password:string = "";
    private repeatPassword:string = "";

    onSubmit(e:Event){
        e.preventDefault();
        if(this.valid){
            this.$store.dispatch("auth/createUser",{
                firstname:this.firstname,
                surname:this.surname,
                username:this.username,
                password:this.password,
            })
        }
    }

    //validations
    get validFirstname():boolean{
        return this.firstname.length > 0;
    }
    get validSurname():boolean{
        return this.surname.length > 0;
    }
    get validUsername():boolean{
        return this.username.length > 0;
    }
    get validPassword():boolean{
        return this.password.length > 0;
    }
    get validRepeatPassword():boolean{
        return this.repeatPassword == this.password;
    }
    get valid():boolean{
        return  this.validFirstname && this.validSurname 
                && this.validUsername && this.validPassword 
                && this.validRepeatPassword;
    }

    @Watch("user")
    userFound(){
        console.log(this.user);
    }
}
</script>

<style scoped>
.create-account-card{
    width:30em;
}
</style>