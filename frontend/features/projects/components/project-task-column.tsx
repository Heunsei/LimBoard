"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { taskStatuses, task } from "@/types/task";
import { Droppable } from "@hello-pangea/dnd";
import ProjectTaskCard from "./project-task-card";
import { useState } from "react";
import { getTasksByStatus, TasksByStatus } from "./statuses";

export default function ProjectTaskColumn({
  status,
  tasks,
}: {
  status: taskStatuses;
  tasks: task[];
}) {
  const [tasksByStatus, setTasksByStatus] = useState<TasksByStatus>(
    getTasksByStatus([])
  );
  return (
    <Droppable droppableId={status}>
      {(droppableProvided, snapshot) => (
        <Card
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="flex flex-col p-5 pt-1 gap-2"
        >
          <CardHeader className="items-center">
            <CardTitle className="">{status}</CardTitle>
          </CardHeader>
          {tasks.map((task, index) => (
            <ProjectTaskCard key={task.id} task={task} index={index} />
          ))}
          {droppableProvided.placeholder}
        </Card>
      )}
    </Droppable>
  );
}
