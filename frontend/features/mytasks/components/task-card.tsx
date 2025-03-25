import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardHeaderType } from "../types/task-type";
import {
  ClipboardCheckIcon,
  ClockAlertIcon,
  FolderKanbanIcon,
  StickyNoteIcon,
  UserCheckIcon,
} from "lucide-react";

const getIconComponent = (header: CardHeaderType) => {
  const option = "block md:block";
  switch (header) {
    case "total project":
      return <FolderKanbanIcon className={option} />;
    case "total task":
      return <StickyNoteIcon className={option} />;
    case "assigned tasks":
      return <UserCheckIcon className={option} />;
    case "completed tasks":
      return <ClipboardCheckIcon className={option} />;
    case "overdue tasks":
      return <ClockAlertIcon className={option} />;
  }
};

export default function TaskCard({
  cardHeader,
  cardData,
}: {
  cardHeader: CardHeaderType;
  cardData: number;
}) {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <p className="text-base">{cardHeader}</p>
          {getIconComponent(cardHeader)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">{cardData}</p>
      </CardContent>
    </Card>
  );
}
