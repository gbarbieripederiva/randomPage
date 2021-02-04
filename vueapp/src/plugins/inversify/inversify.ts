import "reflect-metadata";
import { Container } from "inversify";
import { PluginFunction } from "vue";
import _Vue from "vue";
import { UserService } from "./interfaces/services/userService";
import { TYPES } from "./inversifyTypes";
import { UserServiceImpl } from "./services/userServiceImpl";
import { UserRepositoryImpl } from "./repositories/userRepositoryImpl";
import { UserRepository } from "./interfaces/repositories/userRepository";
const container = new Container();

container.bind<UserRepository>(TYPES.repositories.UserRepositoryImpl).to(UserRepositoryImpl);
container.bind<UserService>(TYPES.services.UserServiceImpl).to(UserServiceImpl);


const InversifyPlugin:PluginFunction<Container> = ( Vue:typeof _Vue )=>{
    Vue.prototype.$container = container;
}

export default InversifyPlugin;
export {InversifyPlugin};
export {container};