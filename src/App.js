import './App.css';
import Pages from './components/pages/Pages';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
