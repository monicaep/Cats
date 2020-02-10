import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import CatList from './CatList';
import Cat from './Cat';
import General from './General';
import gunchan from './images/gunchan.jpg';
import luna from './images/luna.jpg';
import reggie from './images/reggie.jpg';
import './App.css';

class App extends Component {
  static defaultProps = {
    cats: [
      {
        name: "Gunchan",
        nicknames: "Geench, Gunch, 15lb Chonk",
        src: gunchan,
        loves: [
          "Wet food - only pate though.",
        ],
        mischief: [
          "Will steal wet food if given the chance.",
          "Will attack if his fat tum is touched."
        ],
        identify: [
          "Yellow eyes.",
          "Skinniest tail.",
          "Largest body."
        ]
      },
      {
        name: "Luna",
        nicknames: "Lunar, Princess Luna, Lune",
        src: luna,
        loves: [
          "Pets.",
        ],
        mischief: [
          "Will growl if another cat approaches a toy she is playing with.",
          "Will lick your food if you let her."
        ],
        identify: [
          "Fluffy tail.",
          "Lightest shade of grey.",
          "Small face/head.",
          "Will scurry over crying and collapse in front of you if she sees pets given to anyone other than her.",
        ]
      },
      {
        name: "Reggie",
        nicknames: "Reg, Regemeister",
        src: reggie,
        loves: [
          "Playing.",
          "Sleeping on shoes, especially flip flops."
        ],
        mischief: [
          "Uses tampon box as a personal toy dispenser.",
          "Messy kibble eater."
        ],
        identify: [
          "Fluffy tail.",
          "Amber eyes.",
          "Small white patch on stomach."
        ]
      }
    ]
  }

  render() {
    const getCat = props => {
      let name = props.match.params.name;
      let currCat = this.props.cats.find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
      );
      return <Cat {...props} cat={currCat} />
    }
    return (
      <div>
        <Navbar cats={this.props.cats}/>
        <Switch>
          <Route exact path='/cats' render={() => <CatList cats={this.props.cats}/>} />
          <Route exact path='/cats/:name' render={getCat} />
          <Route exact path='/general' render={() => <General />} />
          <Redirect to='/cats' />
        </Switch>
      </div>
    )
  }
}

export default App;
