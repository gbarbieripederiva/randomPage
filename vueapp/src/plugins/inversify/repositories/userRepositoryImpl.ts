import utils from "@/plugins/utils";
import { injectable } from "inversify";
import { User, CreateUser, LoginInfo } from "../interfaces/models/user";
import { UserRepository } from "../interfaces/repositories/userRepository";

@injectable()
export class UserRepositoryImpl implements UserRepository {
    async get(id: number): Promise<User | Error> {
        let res = await fetch(utils.getApiUrl("/user/"+id))
        if(res.ok){
            return await res.json();
        }else{
            // TODO: i18n or something better
            return new Error(`Error ${res.status}:${res.statusText}`)
        }
    }
    async createUser(user: CreateUser): Promise<User | Error> {
        let res = await fetch(utils.getApiUrl("/user"),{
            headers:{
                "content-type":utils.mimeTypes.createUser
            },
            method:"POST",
            body:JSON.stringify(user)
        })
        if(res.ok){
            return await res.json();
        }else{
            // TODO: i18n or something better
            return new Error(`Error ${res.status}:${res.statusText}`)
        }
    }
    async login(loginInfo: LoginInfo): Promise<User | Error> {
        let res = await fetch(utils.getApiUrl("/login"),{
            headers:{
                "content-type":utils.mimeTypes.loginInfo
            },
            method:"POST",
            body:JSON.stringify(loginInfo)
        })
        if(res.ok){
            return await res.json();
        }else{
            // TODO: i18n or something better
            return new Error(`Error ${res.status}:${res.statusText}`)
        }
    }
}