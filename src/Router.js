import { React, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Product from './pages/Product';

const Home = () => {
  return <h2>Home</h2>;
}

class RouterTest extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Product</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default RouterTest;