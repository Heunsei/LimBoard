import TaskCard from "./task-card";

export default function TaskProgress(): React.ReactNode {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
      <TaskCard cardHeader="total project" cardData={1} />
      <TaskCard cardHeader="total task" cardData={1} />
      <TaskCard cardHeader="assigned tasks" cardData={1} />
      <TaskCard cardHeader="completed tasks" cardData={1} />
      <TaskCard cardHeader="overdue tasks" cardData={1} />
    </div>
  );
}
