import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Indetail from "./toyproject/Indetail";
import Main from "./toyproject/Main";
import Ani from "./toyproject/Ani";
import Action from "./toyproject/Action"
import Romance from "./toyproject/Romance";
import Comedy  from "./toyproject/Comedy";
import Horror from "./toyproject/Horror";
import Thriller from "./toyproject/Thriller"

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/thriller">
          <Thriller />
        </Route>
        <Route path="/action">
          <Action />
        </Route>
        <Route path="/animation">
          <Ani />
        </Route>
        <Route path="/romance">
          <Romance />
        </Route>
        <Route path="/comedy">
          <Comedy />
        </Route>
        <Route path="/horror">
          <Horror />
        </Route>
        <Route path="/:id">
          <Indetail />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
