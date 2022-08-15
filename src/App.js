import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {

  const [routeDisplay, setRouteDisplay] = useState(<></>)

  useEffect(() => {
    let toAdd = [];
    routes.forEach((r, i) => {
      toAdd.push(
        r.exact === true
          ? <Route key={`route${i}`} exact path={r.path}>{r.component}</Route>
          : <Route path={r.path}>{r.component}</Route>
      );
    });
    setRouteDisplay(toAdd);

  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routeDisplay}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;