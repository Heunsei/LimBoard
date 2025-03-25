"use client";
import { MonthCalendar } from "@/features/main/components/month-calendar";
import MainContent from "@/features/main/components/main-content";
import { WeekCalendar } from "@/features/main/components/week-calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const membersPageData = {
  title: "Home",
};

export default function Page() {
  const [checkedCalendar, setCheckedCalendar] = useState<"주" | "월">("월");
  const handleClickCalendarButton = (props: "주" | "월") => {
    setCheckedCalendar(props);
  };
  return (
    <>
      <MainContent props={membersPageData} />
      <div className="p-4">
        <div className="flex gap-2">
          <Button
            disabled={checkedCalendar === "월"}
            onClick={() => handleClickCalendarButton("월")}
          >
            월
          </Button>
          <Button
            disabled={checkedCalendar === "주"}
            onClick={() => handleClickCalendarButton("주")}
          >
            주
          </Button>
        </div>
        {checkedCalendar === "주" ? <WeekCalendar /> : <MonthCalendar />}
      </div>
    </>
  );
}
