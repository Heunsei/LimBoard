import MainContent from "@/features/main/components/main-content";

const membersPageData = {
  title: "Members",
};

export default function Page() {
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="p-6">gd</div>
    </>
  );
}
