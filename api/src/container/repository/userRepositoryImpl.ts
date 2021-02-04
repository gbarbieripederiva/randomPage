import { User,CreateUser, LoginInfo } from "@container/interfaces/models/user";
import { injectable } from "inversify";
import { UserRepository } from "@container/interfaces/repositories/userRepository";
import { db } from "@db";
import fs from "fs";
import path from "path";

@injectable()
export class UserRepositoryImpl implements UserRepository{

    private readonly resourcesPath = path.join(__dirname,"resources","userRepository");

    constructor(){
        let resourceFiles = fs.readdirSync(this.resourcesPath);
        resourceFiles = resourceFiles.sort();
        for (const file of resourceFiles) {
            db.run(fs.readFileSync(path.join(this.resourcesPath,file)).toString());
        }
    }

    async getById(id:number):Promise<User|null>{
        return await new Promise((resolve,reject)=>{
                db.get("select * from users where id = ?;",[id],(err,row)=>{
                    if(err){
                        resolve(null);
                    }else{
                        resolve({
                            id:row.id,
                            username:row.username,
                            firstname:row.firstname,
                            surname:row.surname
                        });
                    }
                })
            }
        )
    }

    
    async create(user:CreateUser):Promise<User|null>{
        return await new Promise(function(resolve,reject){
            db.run(`insert into users (username,password,firstname,surname)
            values (?,?,?,?);`,
            [user.username,user.password,user.firstname,user.surname],
            function(err){
                if(err){
                    resolve(null);
                }else{
                    resolve({
                        id:this.lastID,
                        username:user.username,
                        firstname:user.firstname,
                        surname:user.surname
                    });
                }
            })
        }
        )
    }

    async login(loginInfo:LoginInfo):Promise<User|null>{
        return await new Promise(function(resolve,reject) {
            db.get(`select * from users 
                    where username=? and password=?`,
                    [loginInfo.username,loginInfo.password],
                    function(err,row) {
                        if(err){
                            resolve(null);
                        }else if(!row){
                            resolve(null);
                        }else{
                            resolve({
                                id:row.id,
                                username:row.username,
                                firstname:row.firstname,
                                surname:row.surname
                            })
                        }
                    }
            )
        }

        )
    }
}