import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from "react-bootstrap"

import '../App.css';

import CharacterListContainer from '../containers/CharacterListContainer'
import SelectedCharacterContainer from '../containers/SelectedCharacterContainer'
import SlideShow from './SlideShow'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://cdn.pcwallart.com/images/game-of-thrones-logo-png-wallpaper-4.jpg"
          height="100px"
        />
        </div>
        <Grid style={{marginTop: "50px"}}>
           <Row className="show-grid" >
             <Col sm={6}>
              <CharacterListContainer/>
            </Col>
             <Col sm={6}>
               <SelectedCharacterContainer/>
            </Col>
          </Row>
        </Grid>
        <SlideShow/>
         <span style={{
            color: "black",
            marginTop: "50px",
         }}>Source Code: <a href="https://github.com/AaronStackBarnes/redux-setup-tutorial" target="_blank">github.com/AaronStackBarnes/redux-setup-tutorial</a> | Portfolio: <a href="http://www.AaronStackBarnes.com" target="_blank">AaronStackBarnes.com</a> </span>
      </div>
    );
  }
}

export default Main;
