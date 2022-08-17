import { ActivityCard } from "./ActivityCard";
import { AddNewActivityModal } from "./AddNewActivityModal";

export function ActivitiesList() {
  return (
    <div>
      <AddNewActivityModal />
      <ul>Activities List</ul>
      <ActivityCard />
    </div>
  );
}
