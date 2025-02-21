import MainContent from "@/features/main/components/main-content";
import DeleteTeamCard from "@/features/main/components/team-delete-card";
import TeamSettingCard from "@/features/main/components/team-setting-card";

const membersPageData = {
  title: "Settings",
};

export default function Page() {
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="p-5 flex flex-col gap-4">
        <TeamSettingCard />
        <DeleteTeamCard />
      </div>
    </>
  );
}
