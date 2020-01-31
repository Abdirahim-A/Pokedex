import React, {Component} from 'react';
import {Palette} from 'react-palette';
import './comcss/pokedex.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactImageAppear from 'react-image-appear';

class Pokedex extends Component{
  constructor() {
    super();
    //Set default message
    this.state = {
      hovered: false
    }
  }

  onMouseEnter = e => {
    this.setState({ hovered: true });
  };

  onMouseLeave = e => {
    this.setState({ hovered: false });
  };

  render(){
      const {name, url} = this.props;
      const index = url.split("/")[url.split("/").length - 2];
      const { hovered } = this.state;
  return (
    <div>
        <Palette src={"https://pokeres.bastionbot.org/images/pokemon/"+index+".png"}>
    {({ data} ) => (
    <div>
        <Link to={`/pokemon/${index}`}><div class="grid-item" style={hovered ? { backgroundColor: data.lightVibrant, boxShadow: '0px 5px 20px ' + data.lightVibrant }: {}} onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <h3 class="poke-tit"><b>{name.toUpperCase()}</b> #{index}</h3>
            <ReactImageAppear
            src={"https://pokeres.bastionbot.org/images/pokemon/"+index+".png"} 
            alt={name}
            className="img"
            showLoader={false}
            placeholderStyle={{ backgroundColor: 'transparent' }}
            /> 
        </div></Link>
    </div>

    )}
    </Palette>



  </div>
  );
}
}

export default Pokedex;
