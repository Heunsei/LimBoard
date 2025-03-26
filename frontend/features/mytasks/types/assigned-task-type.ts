interface assignedTask {
  name: string;
  state: "assigned" | "completed" | "not assigned";
  startDate: Date;
  endDate: Date;
}

export type { assignedTask };
