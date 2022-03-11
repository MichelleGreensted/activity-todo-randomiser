import "./ActivityCard.css"

export function ActivityCard() {
    return <div className="container">
        <input type="checkbox" className="checkbox"/>
        <div className="activity-card-text">
            <h3>Activity Name</h3>
            <p>Location</p>
        </div>
        <div>
            <div/>
            <div/>
        </div>
    </div>
}