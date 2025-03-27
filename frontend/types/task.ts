import { user } from "./user";

type taskState = "todo" | "in process" | "done";

type task = {
  id: number;
  name: string;
  assigned: null | user;
  memo: string;
  state: taskState;
};

export type { taskState, task };
