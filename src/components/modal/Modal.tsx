import { useState } from "react";

export function Modal() {
  const [isModalVisible, setisModalVisible] = useState(false);
  //note: this function could be refactored as a ternary operator within line 23
  //ie. instead of the displayValue()  in style={{ display: displayValue() }}
  const displayValue = () => {
    if (isModalVisible === true) {
      return "block";
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
        Show Modal
      </button>
      <div style={{ display: displayValue() }}>HEEERE'S THE MODAL</div>
    </>
  );
}
