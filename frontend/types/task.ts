import { user } from "./user";

type taskStatuses = "todo" | "in process" | "done";

type task = {
  id: number;
  name: string;
  assigned: null | user;
  memo: string;
  state: taskStatuses;
};

export type { taskStatuses, task };
