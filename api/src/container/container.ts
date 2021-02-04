import "reflect-metadata";
import { Container } from "inversify";
import { UserService } from "./interfaces/services/userService";
import { UserServiceImpl } from "./services/userServiceImpl";
import { TYPES } from "./types";
import { UserRepository } from "./interfaces/repositories/userRepository";
import { UserRepositoryImpl } from "./repository/userRepositoryImpl";

let container = new Container();

//bind repositories
container.bind<UserRepository>(TYPES.repositories.UserRepositoryImpl).to(UserRepositoryImpl).inSingletonScope();


//bind services
container.bind<UserService>(TYPES.services.UserServiceImpl).to(UserServiceImpl).inSingletonScope();





export default container;