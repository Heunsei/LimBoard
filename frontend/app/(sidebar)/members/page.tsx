import MainContent from "@/features/main/components/main-content";
import MemberDashboard from "@/features/members/components/member-dashboard";

const membersPageData = {
  title: "Members",
};

export default function Page() {
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="p-5 flex flex-col gap-4">
        <MemberDashboard />
      </div>
    </>
  );
}
