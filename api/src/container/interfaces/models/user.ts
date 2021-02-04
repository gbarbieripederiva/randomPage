export interface User{
    id:number,
    firstname:string;
    surname:string;
    username:string;
}

export interface CreateUser{
    firstname:string;
    surname:string;
    username:string;
    password:string;
}

export interface LoginInfo{
    username:string,
    password:string
}