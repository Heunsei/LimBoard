import { taskState, task } from "@/types/task";

// TODO getTasksByStatus 수정
export const statuses: taskState[] = ["todo", "in process", "done"] as const;

export type TasksByStatus = { [K in taskState]: task[] };

export const getTasksByStatus = (unorderedTasks: task[]) => {
  const tasksByStatus: TasksByStatus = unorderedTasks.reduce(
    (acc, task) => {
      acc[task.state].push(task);
      return acc;
    },
    statuses.reduce(
      (obj, status) => ({ ...obj, [status]: [] }),
      {} as TasksByStatus
    )
  );

  statuses.forEach((status) => {
    tasksByStatus[status] = tasksByStatus[status].sort(
      (taskA: task, taskB: task) => taskA.id - taskB.id
    );
  });
  return tasksByStatus;
};
