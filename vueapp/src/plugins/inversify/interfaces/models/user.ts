export interface User{
    id:number;
    username:string;
    firstname:string;
    surname:string;
}

export interface CreateUser{
    username:string;
    password:string;
    firstname:string;
    surname:string;
}

export interface LoginInfo{
    username:string,
    password:string
}