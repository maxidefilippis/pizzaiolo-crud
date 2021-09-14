import { Add, List, Edit } from "./components/";
import Layout from "./layout/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
