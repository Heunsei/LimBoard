import { TaskEntity } from 'src/tasks/entities/task.entity';
import { TeamEntity } from 'src/teams/entities/team.entity';

export class UserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  team: TeamEntity[];
  task: TaskEntity[];
}
