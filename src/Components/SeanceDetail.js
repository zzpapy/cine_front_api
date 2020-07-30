import React from 'react';
import {   
    Link
  } from "react-router-dom";

export class SeanceDetail extends React.Component {
  constructor(props){
    super(props)
  }
  
render() {
    return (
        <Link to={ "/seance/" + this.props.seance["id"] }>
          {console.log(this.props.seance["id"])}
            <div className="articleShortContainer">
                <div className="articleShortNameContainer">
                  <p>{ this.props.seance["salle"].nom }</p>
                    <h3 className="articleShortName">{ this.props.seance["film"].titre }</h3>
                </div>
            </div>
        </Link>
    )
  }
}


