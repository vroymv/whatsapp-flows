import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Netflix from "./Netflix";
import Zillowgroup from "./Zillowgroup";

export default function App() {
  return (
    <div className="App">
      <h1>Accounts</h1>
      <Router>
        <Route>
          <Link to="/netflix">Netflix</Link>
        </Route>
        <Route>
          <Link to="/zillow-group">Zillow Group</Link>
        </Route>
        <Route>
          <Link to="/yahoo">Yahoo</Link>
        </Route>
        <Route>
          <Link to="/modus-create">Modus Create</Link>
        </Route>

        <Routes>
          <Route path="/netflix">
            <Netflix />
          </Route>
          <Route path="/zillow-group">
            <Zillowgroup />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
