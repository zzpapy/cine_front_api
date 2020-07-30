import React from 'react';
import {SeanceDetail} from'./SeanceDetail';
import {getSeances} from '../API/API.js'


export class SeancesList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      seances : []
    }
  }
  
  async componentDidMount() {
    let seances = await getSeances()
    this.setState({
      seances : seances["hydra:member"]
    })
  }
  
  render(){
    console.log(this.state.seances)
    return <div>
            <h2>Nos Séances</h2>
        <div className="articlesContainer">
            { this.state.seances !== undefined
                ? this.state.seances.map((i, index) => <SeanceDetail key={ index } seance={ i } />)
                : undefined }
        </div>
    </div>
}
}


