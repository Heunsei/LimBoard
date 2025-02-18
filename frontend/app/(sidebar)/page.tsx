import MainContent from "@/features/main/components/main-content";

const membersPageData = {
  title: "Home",
};

export default function Page() {
  return (
    <>
      <MainContent props={membersPageData} />
    </>
  );
}
