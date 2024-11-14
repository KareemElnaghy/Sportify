import { PMPartyPostsList } from "@/PMs/PartyPosts/PartyPostsListPM";

export interface PartyPostsListModel {
  setup: () => Promise<void>;
}

export function getPartyPostsListModel(
  pm: PMPartyPostsList
): PartyPostsListModel {
  const model: PartyPostsListModel = {
    setup: async () => {
      pm.pmSidebar.linkNames = [
        "Dashboard",
        "Students List",
        "Courts List",
        "Party Posts List",
        "Reservations List",
        "Email",
        "Settings",
      ];
      pm.pmSidebar.currentActive = 3;
      setTimeout(() => {
        pm.partyPostsList = [
          {
            id: 0,
            ownerEmail: "1",
            member: "another person",
            eventName: "Wow",
            sport: "Football",
            location: "Basily",
            description: "another thing",
            startTime: new Date("2024-11-05T00:00:00Z"),
            endTime: new Date("2024-11-05T00:00:00Z"),
          },
          {
            id: 1,
            ownerEmail: "2",
            member: "7",
            eventName: "Hello",
            sport: "BasketBall",
            location: "Artoc",
            description: "smth",
            startTime: new Date("2024-11-05T00:00:00Z"),
            endTime: new Date("2024-11-05T00:00:00Z"),
          },
        ];
      }, 1000);
    },
  };

  return model;
}
