import container from "../container/container";
import { UserService } from "../container/interfaces/services/userService";
import { TYPES } from "../container/types";
import express from "express";
import { MIME_TYPES } from "../mimetypes";

const route = express.Router();

route.get("/:id([0-9]+)", async (req, res) => {
    let user = await container.get<UserService>(TYPES.services.UserServiceImpl)
                                .get(parseInt(req.params.id));
    if(user != null){
        res.status(200).send(user);
    }else{
        res.status(404).send();
    }
})

route.post( "/" , async ( req,res ) => {
    if(req.headers["content-type"]==MIME_TYPES.createUser){
        let usercreated = await container.get<UserService>(TYPES.services.UserServiceImpl)
                                .set(req.body)
        if(usercreated){
            res.status(201).send(usercreated);
        }else{
            res.status(500).send();
        }
    }else{
        res.status(400).send();
    }
})

export default route;