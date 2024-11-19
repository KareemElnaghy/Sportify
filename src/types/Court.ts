import { RequirePartials } from "@/libs/Utils/Typing";

export default interface Court {
  name: string;
  id: number;
  sport: string;
  location: string;
  description: string;
}

type requiredNewCourtAttributes = "name" | "sport";
export type NewCourt = RequirePartials<
  Omit<Court, "id">,
  requiredNewCourtAttributes
>;

export type NewCourtIncomplete = Partial<NewCourt>;
