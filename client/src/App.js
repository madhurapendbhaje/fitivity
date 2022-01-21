import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PersonalChalList from "./Pages/PersonalChalList/PersonalChalList";
import PersonalChalDetails from "./Pages/PersonalChalDetails/PersonalChalDetails";
import PersonalChalReport from "./Pages/PersonalChalReport/PersonalChalReport";
import TeamChalList from "./Pages/TeamChalList/TeamChalList";
import TeamChalDetails from "./Pages/TeamChalDetails/TeamChalDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" exact to="/personal-challenge" />
        <Route path="/personal-challenge" exact component={PersonalChalList} />
        <Route
          path="/personal-challenge/report/:challengeId"
          component={PersonalChalReport}
        />
        <Route
          path="/personal-challenge/:challengeId"
          component={PersonalChalDetails}
        />
        <Route path="/personal-challenge/:challengeId/:taskId" component />
        <Route path="/team-challenge" exact component={TeamChalList} />
        <Route path="/team-challenge/report/:challengeId" component />
        <Route
          path="/team-challenge/:challengeId"
          component={TeamChalDetails}
        />
        <Route path="/team-challenge/:challengeId/:taskId" component />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
