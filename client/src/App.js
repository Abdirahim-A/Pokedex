import React, {Component} from 'react';
import { render } from "react-dom";

import Home from './components/Home';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from './components/Pokemon';

class App extends Component{
render(){
return (

<Router>
    <div className="App">
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Route exact path="/pokemon/:project" component={Pokemon} />
    </div>
</Router>

);
}
}

export default App;
