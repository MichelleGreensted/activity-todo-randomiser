import "./ActivityCard.css"

export function ActivityCard() {
    return <div className="container">
        <div className="holders">
            <input type="checkbox" className="checkbox"/>
        </div>
        <div className="holder1">
            <div className="name-and-location holders">
                <h3>Activity Name</h3>
                <p>Location</p>
            </div>
            <div className="holders weather-and-delete">
                <input type="checkbox" className="weather-checkbox"/>
                <button>Delete</button>
            </div>
        </div>
        
    </div>
}