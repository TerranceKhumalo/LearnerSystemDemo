import ProjectScreen from "../src/components/projectListScreen/projectScreen";
import "./App.css";
import AddPorjectScreen from "./components/addIteamScreen/addProject";
import ErrorBoundary from "./components/errorScreen/errorSreen";

import UpdateScreen from "./components/updateScreen/updateScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* t
      To test your component comment out this ProjectScreen component
      and add your component. Routing will be added later
       */}
      <Router>
        <Switch>
          <Route path="/add">
            <AddPorjectScreen />
          </Route>

          <Route path="/update">
            <UpdateScreen />
          </Route>

          <Route path="/">
            <ErrorBoundary>
              <ProjectScreen />
            </ErrorBoundary>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
