import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Layout from './common/components/Layout';

function App() {

  const [routeDisplay, setRouteDisplay] = useState(<></>)

  useEffect(() => {
    let toAdd = [];
    routes.forEach((r, i) => {
      toAdd.push(
        r.exact === true
          ? <Route key={`route${i}`} exact path={r.path}><Layout>{r.component}</Layout></Route>
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