import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuariosController } from "./controllers/usuarios.controllers";
import { Usuarios } from "./entities/usuarios.entity";
import { UsuariosServices } from "./services/usuarios.service";

@Module({
    imports : [TypeOrmModule.forFeature([Usuarios])],
    providers : [UsuariosServices],
    controllers : [UsuariosController]
})
export class UsuariosModule{

}