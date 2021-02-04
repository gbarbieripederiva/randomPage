import { User,CreateUser,LoginInfo } from "../models/user";

export interface UserRepository{
    get(id:number):Promise<User|Error>;
    createUser(user:CreateUser):Promise<User|Error>;
    login(loginInfo:LoginInfo): Promise<User|Error>;
}