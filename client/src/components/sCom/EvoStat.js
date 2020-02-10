import React, {Component} from 'react';
import '../comcss/pokemon.css';

class EvoStat extends Component{
  constructor() {
    super();
    //Set default message
    this.state = {
      pokemon: [],
    }
  }

  render(){
    const {stats, evolve, evolve_1} = this.props;

  return (

<div class="grid-container-bot">

<div class="grid-item-bot">
    <div class="grid-con-stats">
    {stats.map((stat) =>
        <React.Fragment>
        <div class="grid-item-stats">
            <p class="stat-name">{stat.stat.name}</p>
        </div>
        <div class="grid-item-stats">
            <div class="stat-div" style={{width: stat.base_stat}}></div>
        </div>
        <div class="grid-item-stats">
            <p class="stat-num">{stat.base_stat}</p>
        </div>
        </React.Fragment>
        )}
    </div>
    
</div>

<div class="grid-item-bot">
    <div class="grid-con-evo">
    {evolve.map((second =>
    second.evolves_to.map((third =>
      <React.Fragment>
      <div class="grid-item-evo">
      <p class="evo-tit">{evolve_1.name}</p>
          <p class="evo-tit-num">#{evolve_1.url.split("/")[evolve_1.url.split("/").length - 2]}</p>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${evolve_1.url.split("/")[evolve_1.url.split("/").length - 2]}.png`} class="img-evo" />
      </div>
      <div class="grid-item-evo">
          <p class="evo-tit">{second.species.name}</p>
          {evolve.map((second =>
          <React.Fragment>
          <p class="evo-tit-num">#{second.species.url.split("/")[third.species.url.split("/").length - 2]}</p>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${second.species.url.split("/")[second.species.url.split("/").length - 2]}.png`} class="img-evo" />
          </React.Fragment>
          ))}
      </div>
      <div class="grid-item-evo">
          <p class="evo-tit">{third.species.name}</p>
          {evolve.map((second =>
      second.evolves_to.map((third =>
        <React.Fragment>
        <p class="evo-tit-num">#{third.species.url.split("/")[third.species.url.split("/").length - 2]}</p>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${third.species.url.split("/")[third.species.url.split("/").length - 2]}.png`} class="img-evo" />
        </React.Fragment>
        ))
      ))}
      </div>
      </React.Fragment>
      ))
      ))}
    </div>

</div>
</div>

  );
}
}

export default EvoStat;
