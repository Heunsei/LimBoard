"use client";
import { Card } from "@/components/ui/card";
import { taskStateType, taskType } from "@/types/task";
import { Droppable } from "@hello-pangea/dnd";
import ProjectTaskCard from "./project-task-card";
import { useState } from "react";

export default function ProjectTaskColumn({
  status,
  tasks,
}: {
  status: taskStateType;
  tasks: taskType[];
}) {
  const [tasksByStatus, setTasksByStatus] = useState<tasksByStatus>(
    getTasksByStatus([])
  );
  return (
    <Droppable droppableId={status}>
      {(droppableProvided, snapshot) => (
        <Card
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className={snapshot.isDraggingOver ? " isDraggingOver" : ""}
        >
          {tasks.map((task, index) => (
            <ProjectTaskCard key={task.id} task={task} index={index} />
          ))}
          {droppableProvided.placeholder}
        </Card>
      )}
    </Droppable>
  );
}
