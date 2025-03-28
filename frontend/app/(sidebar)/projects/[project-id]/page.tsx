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
      <div className="p-4 gap-3 grid font-black">
        <div className="flex flex-col gap-2">
          <p className="text-2xl gmarketBold">Project Board</p>
          <p>{"project name"} tasks</p>
        </div>
        <ProjectTaskContainer />
      </div>
    </>
  );
}
