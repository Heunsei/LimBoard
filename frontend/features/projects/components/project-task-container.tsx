"use client";
import { useState } from "react";
import { taskType } from "@/types/task";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

import { statuses } from "./statuses";
import ProjectTaskColumn from "./project-task-column";

const dummyTask: taskType[] = [
  { id: 1, name: "1234", assigned: null, memo: "이거", state: "done" },
  { id: 2, name: "514", assigned: null, memo: "왜", state: "done" },
  { id: 3, name: "12412", assigned: null, memo: "고장났죠", state: "done" },
  { id: 4, name: "15gga", assigned: null, memo: "개발자님", state: "done" },
  { id: 5, name: "fwgerb", assigned: null, memo: "고치세요", state: "done" },
];

export default function ProjectTaskContainer() {
  const [taskArray, setTaskArray] = useState<taskType[]>(dummyTask);

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

    const sourceStatus = source.droppableId;
    const destinationStatus = destination.droppableId;

    const items = Array.from(taskArray);
    const [reorderedItem] = items.splice(result.source.index, 1); // 드래그한 항목을 자르고 그 항목을 변수에 저장
    items.splice(destination.index, 0, reorderedItem); // reorderedItem를 드롭한 위치에 삽입

    setTaskArray(items);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="gird gird-col-3">
        {statuses.map((status) => (
          <ProjectTaskColumn status={status} tasks={dummyTask} key={status} />
        ))}
      </div>
    </DragDropContext>
  );
}
