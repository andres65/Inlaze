import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Usuarios } from "../entities/usuarios.entity";
import { UsuariosServices } from "../services/usuarios.service";

@Controller('api/usuarios')
export class UsuariosController extends BaseController<Usuarios>{
    
    constructor(private readonly usuariosService: UsuariosServices){
        super();
    }

    getService(): BaseService<Usuarios> {
        return this.usuariosService;
    }

}