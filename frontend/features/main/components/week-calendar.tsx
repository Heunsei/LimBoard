"use client";
import React, { useState } from "react";
import { DateTime, Interval } from "luxon";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const WeekCalendar = () => {
  const today = DateTime.local();
  const [activeDay, setActiveDay] = useState<DateTime<true>>(today);
  const [firstDayOfActiveWeek, setFirstDayOfActiveWeek] = useState(
    today.startOf("week")
  );

  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];
  const daysOfWeek = Interval.fromDateTimes(
    firstDayOfActiveWeek.startOf("week"),
    firstDayOfActiveWeek.endOf("week")
  )
    .splitBy({ day: 1 })
    .map((day) => day.start);

  const handleClickDayGrid = (selectedDate: DateTime<true>) => {
    setActiveDay(selectedDate);
  };

  const goToPreviousWeek = () => {
    setFirstDayOfActiveWeek(firstDayOfActiveWeek.minus({ weeks: 1 }));
  };

  const goToNextWeek = () => {
    setFirstDayOfActiveWeek(firstDayOfActiveWeek.plus({ week: 1 }));
  };

  return (
    <div className="flex flex-col w-full mb-3">
      <div className="flex justify-center gap-3 font-black text-xl">
        <button>
          <ArrowLeft
            className="cursor-pointer"
            onClick={() => goToPreviousWeek()}
          />
        </button>
        {`${firstDayOfActiveWeek.year}년 ${firstDayOfActiveWeek.month}월`}
        <button>
          <ArrowRight
            className="cursor-pointer"
            onClick={() => goToNextWeek()}
          />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center font-semibold border-b pb-2">
        {weekDays.map((weekDay, weekDayIndex) => (
          <div key={weekDayIndex} className="p-2">
            {weekDay}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center font-semibold">
        {daysOfWeek.map((dayOfMonth, dayOfMonthIndex) => {
          return (
            <div
              key={dayOfMonthIndex}
              className="cursor-pointer p-5 p2"
              onClick={() => dayOfMonth && handleClickDayGrid(dayOfMonth)}
            >
              {dayOfMonth?.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};
