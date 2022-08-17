import { useState } from "react";

export function AddNewActivityModal() {
  const [isModalVisible, setisModalVisible] = useState(false);
  //note: this function could be refactored as a ternary operator within line 23
  //ie. instead of the displayValue()  in style={{ display: displayValue() }}
  const displayValue = () => {
    if (isModalVisible === true) {
      return "flex";
    } else {
      return "none";
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setisModalVisible(true);
        }}
      >
        + Add New Activity
      </button>

      <div
        style={{
          display: displayValue(),
          zIndex: 1,
          position: "fixed",
          top: 0,
          backgroundColor: "#64656680",
          height: "100vh",
          width: "100%",
          // alignItems: "center",
          paddingTop: "120px",
          justifyContent: "center",
        }}
      >
        <div
          style={{ backgroundColor: "green", height: "200px", width: "500px" }}
        >
          HEEERE'S THE MODAL
          <h3>Add New Activity</h3>
          <label>
            Activity Name
            <input type="text" />
          </label>
          <label>
            Location
            <input type="text" />
          </label>
          <label>
            Weather dependent?
            <input type="checkbox" />
          </label>
          <button
            onClick={() => {
              setisModalVisible(false);
            }}
          >
            Cancel
          </button>
          <button>+ Add Activity</button>
        </div>
      </div>
    </>
  );
}
