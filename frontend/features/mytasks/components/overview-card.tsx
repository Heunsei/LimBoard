"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OverViewDoughnutChart from "./overview-doughnut-chart";
export default function OverviewCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>over view</CardTitle>
      </CardHeader>
      <CardContent className="box-content grid place-items-center m-5">
        <OverViewDoughnutChart />
      </CardContent>
    </Card>
  );
}
