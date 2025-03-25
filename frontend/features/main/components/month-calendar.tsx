"use client";
import React, { useState } from "react";
import { DateTime, Interval } from "luxon";
import { ArrowLeft, ArrowRight } from "lucide-react";
export const MonthCalendar = () => {
  const today = DateTime.local();
  const [activeDay, setActiveDay] = useState<DateTime<true> | null>(today);
  const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(
    today.startOf("month")
  );

  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];
  const daysOfMonth = Interval.fromDateTimes(
    firstDayOfActiveMonth.startOf("week"),
    firstDayOfActiveMonth.endOf("month").endOf("week")
  )
    .splitBy({ day: 1 })
    .map((day) => day.start);

  const handleClickDayGrid = (selectedDate: DateTime<true> | null) => {
    console.log(selectedDate);
    setActiveDay(selectedDate);
  };

  const goToPreviousMonth = () => {
    setFirstDayOfActiveMonth(firstDayOfActiveMonth.minus({ month: 1 }));
  };

  const goToNextMonth = () => {
    setFirstDayOfActiveMonth(firstDayOfActiveMonth.plus({ month: 1 }));
  };

  return (
    <div className="flex flex-col w-full mb-3">
      <div className="flex justify-center gap-3 font-black text-xl">
        <button>
          <ArrowLeft
            className="cursor-pointer"
            onClick={() => goToPreviousMonth()}
          />
        </button>
        {`${firstDayOfActiveMonth.year}년 ${firstDayOfActiveMonth.month}월`}
        <button>
          <ArrowRight
            className="cursor-pointer"
            onClick={() => goToNextMonth()}
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
        {daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => {
          const isCurrentMonth =
            dayOfMonth?.month === firstDayOfActiveMonth.month;
          const dateCellClassName = "cursor-pointer p-5";
          return (
            <div
              key={dayOfMonthIndex}
              className={
                isCurrentMonth
                  ? dateCellClassName + " p2"
                  : dateCellClassName + " text-gray-300"
              }
              onClick={() => handleClickDayGrid(dayOfMonth)}
            >
              {dayOfMonth?.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};
