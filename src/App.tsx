import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListScreen from './screens/ListScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            <ListScreen />
          </div>
        </Route>
        <Route path="/focus">
          <div>Focus view</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
