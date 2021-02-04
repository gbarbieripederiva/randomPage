import { User,CreateUser,LoginInfo } from "../models/user";

export interface UserService{
    get(id:number):Promise<User|Error>;
    createUser(user:CreateUser):Promise<User|Error>;
    login(loginInfo:LoginInfo):Promise<User|Error>;
}