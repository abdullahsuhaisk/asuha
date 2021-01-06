import AppBar from "./Components/TopBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Footer from "./Components/Footer";
import { routes } from "./Utils/Consts";


function App() {
  return (
    <>
      <Router>
        <AppBar />
        <Switch>
          {
            routes.map((item, key) => {
              return (<Route path={item.path || '/'+item.name} component={item.component} exact key={key}/>);
            })
          }
        </Switch>
      </Router>
      <Footer />
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