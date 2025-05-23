import { ProjectEntity } from "src/projects/entities/project.entity"
import { UserEntity } from "src/users/entity/user.entity"

export class TaskEntity {
    id: Number
    taskName: String
    project: ProjectEntity
    createdAt: Date
    user: UserEntity | null
}
