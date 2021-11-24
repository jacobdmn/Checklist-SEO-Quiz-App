import "./style/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Content from "./components/Content";

import checklists from "./data";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact to='/general'>
            <Content checklist={checklists[0]} />
          </Route>
          <Route to='/landing-pages'>
            <Content checklist={checklists[0]} />
          </Route>
          <Route to='/home-pages'>
            <Content checklist={checklists[0]} />
          </Route>
          <Route to='/product-pages'>
            <Content checklist={checklists[0]} />
          </Route>
          <Route to='/cart-pages'>
            <Content checklist={checklists[0]} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
