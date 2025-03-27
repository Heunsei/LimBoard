import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyData = {
  labels: ["To do", "In progress", "Done"],
  datasets: [
    {
      label: "number of task",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true, // 화면 크기에 맞게 조절
};

export default function OverViewDoughnutChart() {
  return (
    <div>
      <Doughnut data={dummyData} options={options} />
    </div>
  );
}
