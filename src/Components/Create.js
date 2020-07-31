import React from 'react';
import {getDetail,update,createFilm} from '../API/API.js'

export class Create extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state={
      seance : [],
    }
  }
 create(){
     console.log()
     let titre = document.getElementById("titre").value
     let duree = document.getElementById("duree").value
     let synopsis = document.getElementById("synopsis").value
     let data ={
       "titre" : titre ,
       "duree" : parseInt(duree) ,
       "synopsis" : synopsis
   }
   console.log(data)
   createFilm(data)
 }
  
  handleChange(e) {
    this.setState({value: e.target.value});
    console.log(this.state);
  }
  handleChangeDuree = (e) => {
    this.setState({duree: e.target.value});
    console.log(this.state)
  } 
  handleChangeSyn = (e) => {
    this.setState({synopsis: e.target.value});
    console.log(e.target.value);
  }


  render() {
    
      return (
        <div>
            Titre : <input onChange={this.handleChange} id="titre" type="text" placeholder="titre"  />
            durre: <input onChange={this.handleChangeDuree} id="duree" type="number" placeholder="durée (min)"  />
            Synopsis:<textarea onChange={this.handleChangeSyn} id="synopsis" placeholder="synopsis" ></textarea>
            <button onClick={this.create}>test</button>
        </div>
      
      )
    }
}


