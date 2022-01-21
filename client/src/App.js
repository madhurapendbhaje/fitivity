import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PersonalChalList from "./Pages/PersonalChalList/PersonalChalList";
import PersonalChalDetails from "./Pages/PersonalChalDetails/PersonalChalDetails";
import PersonalChalReport from "./Pages/PersonalChalReport/PersonalChalReport";
import TeamChalList from "./Pages/TeamChalList/TeamChalList";
import TeamChalDetails from "./Pages/TeamChalDetails/TeamChalDetails";
import Home from "./Pages/Home/Home";
import Day1Page from "./Pages/Day1Page/Day1Page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Redirect from="/" exact to="/personal-challenge" /> */}
        <Route path="/" exact component={Home} />
        <Route
          path="/personal-challenge/categories/:category"
          exact
          component={PersonalChalList}
        />
        <Route
          path="/personal-challenge/report"
          component={PersonalChalReport}
        />
        <Route
          path="/personal-challenge/:challengeId"
          component={PersonalChalDetails}
        />
        <Route path="/Day1" component={Day1Page} />
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
