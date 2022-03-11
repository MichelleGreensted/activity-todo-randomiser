import { ActivityCard } from "./ActivityCard"
import { AddNewActivity } from "./AddNewActivity"

export function ActivitiesList() {
    return <>
        <AddNewActivity/>
        <ul>Activities List</ul>
        <ActivityCard/>
    </>
}
