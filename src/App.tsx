import "./App.css";
import { ActivitiesList } from "./components/ActivitiesList";
import { GetActivity } from "./components/GetActivity";
import { Modal } from "./components/modal/Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">Activity Todo Randomiser</header>
      <GetActivity />
      <ActivitiesList />
      <Modal />
    </div>
  );
}

export default App;
