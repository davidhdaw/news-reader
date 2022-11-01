import './App.css';
import { Route, Routes } from "react-router-dom";
import FrontPage from './Components/FrontPage/FrontPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
      </Routes>
    </div>
  );
}

export default App;
