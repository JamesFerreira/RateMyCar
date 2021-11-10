import './App.css';
import Login from "./components/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
