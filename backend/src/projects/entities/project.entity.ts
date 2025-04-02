import { TaskEntity } from "src/tasks/entities/task.entity"
import { TeamEntity } from "src/teams/entities/team.entity"

export class ProjectEntity {
    id: Number
    name: String
    startDate: Date
    endDate: Date
    task: TaskEntity[]
    team: TeamEntity
}
