import MainContent from "@/features/main/components/main-content";

const membersPageData = {
  title: "My Tasks",
};

export default function Page() {
  return (
    <>
      <MainContent props={membersPageData} />
    </>
  );
}
