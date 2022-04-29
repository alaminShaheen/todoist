import { Injectable } from "@nestjs/common";
import { DatabaseService } from "database/database.service";

@Injectable()
export class AuthService {
    constructor(private database: DatabaseService) {}
    
    login() {
        return "login"
    }

    register() {
        return "register"
    }
}