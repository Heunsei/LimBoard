import { IsNumber } from "class-validator";

export class UserEntity {
    id: number
    name: String
    email: String
    // team: TeamsOnUsers[]
    // task: Task[]
}
