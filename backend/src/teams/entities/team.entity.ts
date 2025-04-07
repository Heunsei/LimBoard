import { ProjectEntity } from "src/projects/entities/project.entity"
import { UserEntity } from "src/users/entity/user.entity"

export class TeamEntity {
    id: Number
    name: String 
    teamImage: String
    createdAt: Date
    member: UserEntity[]
    project: ProjectEntity[]
}