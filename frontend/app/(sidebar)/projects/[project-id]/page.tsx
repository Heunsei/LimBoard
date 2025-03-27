"use client";
import MainContent from "@/features/main/components/main-content";
import ProjectTaskContainer from "@/features/projects/components/project-task-container";
import { useParams } from "next/navigation";
export default function Page() {
  const membersPageData = { title: "project" };
  const c = useParams();
  console.log(c);
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="gird grid-cols-3 p-4 w-full">
        <ProjectTaskContainer />
      </div>
    </>
  );
}
