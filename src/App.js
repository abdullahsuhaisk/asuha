import AppBar from "./Components/TopBar";
import Home from "./Page/Home";
import About from "./Page/About";
import Education from './Page/Education';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About/" component={About} exact />
          <Route path="/edu/" component={Education} exact />
        </Switch>
      </Router>
    </>

  );
}

export default App;
/*
<div className="App">
<Container>
  <AppBar />
</Container>
</div>
*/