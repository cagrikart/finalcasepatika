import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<CardList/>} />
          <Route path="/carddetails" element={<CardDetails/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
