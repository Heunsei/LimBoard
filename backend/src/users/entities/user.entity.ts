import { IsNumber } from "class-validator";
import { TaskEntity } from "src/tasks/entities/task.entity";
import { TeamEntity } from "src/teams/entities/team.entity";

export class UserEntity {
    id: number
    name: String
    email: String
    team: TeamEntity[]
    task: TaskEntity[]
}
