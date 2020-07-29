import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getFilms} from './API/API.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      films : []
    }
  }
  async componentDidMount() {
    let films = await getFilms()
    this.setState({
      films : films
    })
    console.log(films)
  }
  
  render() {
  
    return (
      <div>toto</div>
    )
  }
}

export default App;
