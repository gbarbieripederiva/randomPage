import { User } from "@/plugins/inversify/interfaces/models/user";

export interface AuthState{
    user:User|null
}