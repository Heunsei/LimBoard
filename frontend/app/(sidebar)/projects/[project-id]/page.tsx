"use client";
import MainContent from "@/features/main/components/main-content";
import { useParams } from "next/navigation";
export default function Page() {
  const membersPageData = { title: "project" };
  const c = useParams();
  console.log(c);
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="p-4"></div>
    </>
  );
}
