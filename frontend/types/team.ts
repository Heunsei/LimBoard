import { project } from "./project";
import { user } from "./user";

type team = {
  name: string;
  members: user[];
  projects: project[];
  teamImg: string;
  createdAt: Date;
};

export type { team };
