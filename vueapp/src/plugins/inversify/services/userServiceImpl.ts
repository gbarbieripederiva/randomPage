import { inject, injectable } from "inversify";
import { User, CreateUser, LoginInfo } from "../interfaces/models/user";
import { UserRepository } from "../interfaces/repositories/userRepository";
import { UserService } from "../interfaces/services/userService";
import { TYPES } from "../inversifyTypes";

@injectable()
export class UserServiceImpl implements UserService {
    
    private readonly userRepository:UserRepository;
    constructor(@inject(TYPES.repositories.UserRepositoryImpl) userRepository:UserRepository){
        this.userRepository = userRepository;
    }

    async get(id: number): Promise<User | Error> {
        return await this.userRepository.get(id);
    }
    async createUser(user: CreateUser): Promise<User | Error> {
        return await this.userRepository.createUser(user);
    }
    async login(loginInfo: LoginInfo): Promise<User | Error> {
        return await this.userRepository.login(loginInfo);
    }
}