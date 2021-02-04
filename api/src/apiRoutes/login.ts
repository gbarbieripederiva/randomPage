import container from "../container/container";
import { UserService } from "../container/interfaces/services/userService";
import { TYPES } from "../container/types";
import express from "express";
import { MIME_TYPES } from "../mimetypes";

const route = express.Router();

route.post("/",async (req,res)=>{
    if(req.headers["content-type"] == MIME_TYPES.loginInfo){
        let user = await container.get<UserService>(TYPES.services.UserServiceImpl)
                            .login(req.body)
        if(user){
            res.status(200).send(user)
        }else{
            res.status(500).send();
        }
    }else{
        res.status(400).send();
    }
})

export default route;