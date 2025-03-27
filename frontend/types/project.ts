import { task } from "./task";

type project = {
  name: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  task: task[];
};

export type { project };
