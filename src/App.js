import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SeancesList} from'./Components/SeancesList';
import {Detail} from'./Components/Detail';
import {Create} from'./Components/Create';
import {   
  Link
} from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      seances : []
    }
  }
  
  
  render() {
    
    console.log(this.state.seances)
    return (
      <Router>
        <Link to={ "/create"  }>creation</Link>
			<Switch>
          <Route exact path="/" component={ SeancesList } />
				  <Route path="/seance/:id" component={ Detail } />
          <Route path="/create" component={ Create } />
			</Switch>
		</Router>
    )
  }
}

export default App;
