import React from 'react'
import {routes} from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap-icons/font/bootstrap-icons.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
 
import Layout from './layout/layout';



function App() {
 
  return (
    <Router>
      <Layout>
        <Switch>
        {routes.map((route, i) =>{
return (
  <Route
    key={i}
    exact={route.exact}
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />)

        })}
        
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
