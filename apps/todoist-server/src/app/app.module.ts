import { Module } from "@nestjs/common";
import { AuthModule } from "auth/auth.module";
import { DatabaseModule } from "database/database.module";
import { ProjectModule } from "project/project.module";
import { TaskModule } from "task/task.module";
import { UserModule } from "user/user.module";

@Module({
    imports: [AuthModule, UserModule, TaskModule, ProjectModule, DatabaseModule]
})
export class AppModule {}
