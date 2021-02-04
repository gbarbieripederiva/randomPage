import { CreateUser, LoginInfo, User } from "../models/user";

export interface UserService{
    get(id:number):Promise<User|null>;
    set(user:CreateUser):Promise<User|null>;
    login(loginInfo:LoginInfo):Promise<User|null>;
}