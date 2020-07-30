import React from 'react';
import {getDetail,update} from '../API/API.js'

export class Detail extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state={
      seance : [],
      value : "",
      duree : "",
      synopsis : ""
    }
  }
  async componentDidMount() {
    let seance = await getDetail(this.props.match.params.id)
    
    this.setState({
      seance : seance
    })
  }
  updateFilm = (e) => {
    e.preventDefault();
    let titre = document.getElementById("titre").value
    let duree = document.getElementById("duree").value
    let synopsis = document.getElementById("synopsis").value
    let data ={
      "titre" : titre !== ""?titre :this.state.seance.titre,
      "duree" : duree !== ""? parseInt(duree):this.state.seance.duree,
      "synopsis" : synopsis !== ""? synopsis:this.state.seance.synopsis
  }

    update(this.state.seance.id,data)
    let seance =  getDetail(this.state.seance.id).then(
      data => this.setState({
        seance : seance,
        duree : seance.duree,
        synopsis : seance.synopsis
      })
    )
    console.log(seance)
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
    let film = this.state.seance

    console.log(this.state.seance)
      return (
        <div>
            Titre : <input onChange={this.handleChange} id="titre" type="text" placeholder={film.titre} value={this.state.value} />
          durre: <input onChange={this.handleChangeDuree} id="duree" type="number" placeholder={film.duree} value={this.state.duree} />
          Synopsis:<textarea onChange={this.handleChangeSyn} id="synopsis" placeholder={film.synopsis} value={this.state.synopsis}></textarea>
          <button onClick={this.updateFilm}>test</button>
        </div>
      
      )
    }
}


