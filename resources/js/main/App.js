import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './component/Home';

function App() {
    return (

      <Router>

        <Switch>
            
          <Route path="/">
            <Home />
          </Route>
        </Switch>
   
    </Router>

    
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
