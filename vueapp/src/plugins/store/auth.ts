import { CreateUser, LoginInfo, User } from "@/plugins/inversify/interfaces/models/user";
import { AuthState } from "./storeTypes/authTypes";
import { ActionContext } from "vuex";
import { container } from "../inversify/inversify";
import { UserService } from "../inversify/interfaces/services/userService";
import { TYPES } from "../inversify/inversifyTypes";
import { Mutation } from "vuex-class";

const state = (): AuthState => {
    return {
        user: null
    }
}
const mutations = {
    login(state:AuthState, payload: User){
        state.user = payload
    }
}
const actions = {
    async login({ commit }: ActionContext<AuthState, AuthState>, payload: LoginInfo) {
        commit("login", await container.get<UserService>(TYPES.services.UserServiceImpl).login(payload))
    },
    async createUser({ commit }: ActionContext<AuthState, AuthState>, payload: CreateUser) {
        commit("login", await container.get<UserService>(TYPES.services.UserServiceImpl).createUser(payload))
    }
}
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}