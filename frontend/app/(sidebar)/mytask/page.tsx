import MainContent from "@/features/main/components/main-content";
import AssignedTaskCard from "@/features/mytasks/components/assigned-task-card";
import OverviewCard from "@/features/mytasks/components/overview-card";
import TaskProgress from "@/features/mytasks/components/task-progress";

const membersPageData = {
  title: "My Tasks",
};

export default function Page() {
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="p-5">
        <TaskProgress />
        <div className="pt-5 grid gap-3 grid-cols-1 lg:grid-cols-2 overflow-y-auto">
          <div className="grid place-items-center w-full h-full">
            <AssignedTaskCard />
          </div>
          <div className="grid place-items-center w-full h-full">
            <OverviewCard />
          </div>
        </div>
      </div>
    </>
  );
}
