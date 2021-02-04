import { inject, injectable } from "inversify";
import { User, CreateUser, LoginInfo } from "../interfaces/models/user";
import { UserRepository } from "../interfaces/repositories/userRepository";
import { UserService } from "../interfaces/services/userService";
import { TYPES } from "../types";

@injectable()
export class UserServiceImpl implements UserService{
    @inject(TYPES.repositories.UserRepositoryImpl)
    private repository:UserRepository;

    async get(id: number): Promise<User|null> {
        return await this.repository.getById(id);
    }

    async set(user: CreateUser): Promise<User|null> {
        // TODO: check create user is valid
        return await this.repository.create(user);
    }

    async login(loginInfo:LoginInfo): Promise<User|null>{
        // TODO: check login info is valid
        return await this.repository.login(loginInfo)
    }
}