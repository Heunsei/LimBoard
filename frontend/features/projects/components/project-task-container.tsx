"use client";
import { useEffect, useState } from "react";
import { task, taskStatuses } from "@/types/task";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import { getTasksByStatus, statuses, TasksByStatus } from "./statuses";
import ProjectTaskColumn from "./project-task-column";

const dummyTask: task[] = [
  { id: 1, name: "1234", assigned: null, memo: "이거", state: "done" },
  { id: 2, name: "514", assigned: null, memo: "왜", state: "done" },
  { id: 3, name: "12412", assigned: null, memo: "고장났죠", state: "todo" },
  {
    id: 4,
    name: "15gga",
    assigned: null,
    memo: "개발자님",
    state: "in process",
  },
  { id: 5, name: "fwgerb", assigned: null, memo: "고치세요", state: "done" },
];

export default function ProjectTaskContainer() {
  const [taskArray, setTaskArray] = useState<task[]>(dummyTask);
  const [tasksByStatus, setTasksByStatus] = useState<TasksByStatus>(
    getTasksByStatus([])
  );

  function onDragEnd(result: DropResult) {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceStatus = source.droppableId as taskStatuses;
    const destinationStatus = destination.droppableId as taskStatuses;
    const sourcePost = tasksByStatus[sourceStatus][source.index]!;
    const destinationPost = tasksByStatus[destinationStatus][
      destination.index
    ] ?? {
      status: destinationStatus,
      index: undefined, // undefined if dropped after the last item
    };
    setTasksByStatus(
      updatePostStatusLocal(
        sourcePost,
        { status: sourceStatus, index: source.index },
        { status: destinationStatus, index: destination.index },
        tasksByStatus
      )
    );
  }

  useEffect(() => {
    if (taskArray) {
      const newPostsByStatus = getTasksByStatus(taskArray);
      setTasksByStatus(newPostsByStatus);
    }
  }, [taskArray]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-3">
        {statuses.map((status) => (
          <ProjectTaskColumn
            status={status}
            tasks={tasksByStatus[status]}
            key={status}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
// status에 따른 상태값을 추적해 위치를 바꿔주는 함수
const updatePostStatusLocal = (
  sourceTask: task,
  source: { status: taskStatuses; index: number },
  destination: {
    status: taskStatuses;
    index?: number;
  },
  tasksByStatus: TasksByStatus
) => {
  if (source.status === destination.status) {
    const column = tasksByStatus[source.status];
    column.splice(source.index, 1);
    column.splice(destination.index ?? column.length + 1, 0, sourceTask);
    return {
      ...tasksByStatus,
      [destination.status]: column,
    };
  } else {
    const sourceColumn = tasksByStatus[source.status];
    const destinationColumn = tasksByStatus[destination.status];
    sourceColumn.splice(source.index, 1);
    destinationColumn.splice(
      destination.index ?? destinationColumn.length + 1,
      0,
      sourceTask
    );
    return {
      ...tasksByStatus,
      [source.status]: sourceColumn,
      [destination.status]: destinationColumn,
    };
  }
};
