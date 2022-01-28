import './App.css';
import { ActivitiesList } from './components/ActivitiesList';
import { GetActivity } from './components/GetActivity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Activity Todo Randomiser
      </header>
      <GetActivity/>
      <ActivitiesList/>
    </div>
  );
}

export default App;
