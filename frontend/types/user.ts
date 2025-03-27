import { team } from "./team";

type user = {
  id: number;
  name: string;
  email: string;
  team: team[];
};

export type { user };
