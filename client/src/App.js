import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PersonalChal from "./Pages/PersonalChal/PersonalChal";
import TeamChal from "./Pages/TeamChal/TeamChal";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/personal-challenge" component={PersonalChal} />
        <Route path="/personal-challenge/report/:challengeId" component />
        <Route path="/personal-challenge/:challengeId" component />
        <Route path="/personal-challenge/:challengeId/:taskId" component />
        <Route path="/team-challenge" component={TeamChal} />
        <Route path="/team-challenge/report/:challengeId" component />
        <Route path="/team-challenge/:challengeId" component />
        <Route path="/team-challenge/:challengeId/:taskId" component />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
