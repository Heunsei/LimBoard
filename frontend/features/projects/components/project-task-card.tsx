import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { task } from "@/types/task";
import { Draggable } from "@hello-pangea/dnd";

export default function ProjectTaskCard({
  task,
  index,
}: {
  task: task;
  index: number;
}) {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card>
            <CardHeader>
              <CardTitle>{task.name}</CardTitle>
            </CardHeader>
            <CardContent>{task.memo}</CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
