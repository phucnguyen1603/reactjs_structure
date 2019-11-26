import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PrivateRoute } from './routes/privateRoute';
import { fakeAuth } from './services/fakeAuth';
import loginContainer from './containers/loginContainer';
import publicContainer from './containers/publicContainer';
import protectedContainer from './containers/protectedContainer';
import { AuthButton } from './components/authButton';
import routes from './routes';
import RouteWithSubRoutes from './routes/routeWithSubRoutes';
export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to='/public'>Public Page</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
          <Switch>
            {
              routes.map((route, i) => {
                // if (route.private) {
                //   return <PrivateRoute path={route.path} component={route.component} />
                // } else {
                //   return <Route path={route.path} component={route.component} />
                // }
                console.log('route: ', route);
                return <RouteWithSubRoutes key={i} {...route} />
              })
            }
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
