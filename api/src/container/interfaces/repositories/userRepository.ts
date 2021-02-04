import { CreateUser, LoginInfo, User } from "../models/user";

export interface UserRepository{
    getById(id:number):Promise<User|null>;
    create(user:CreateUser):Promise<User|null>;
    login(login:LoginInfo):Promise<User|null>;
}