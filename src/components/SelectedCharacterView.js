import React, { Component } from 'react';
import {
  Panel,
  ListGroupItem,
  ListGroup
} from 'react-bootstrap'

class SelectedCharacterView extends Component {

  displaySpoiler(){
    let { Name, Spoiler } = this.props.SelectedCharacter
    if ( Spoiler ) {
      return (
        <Panel header="Character Spoiler">
          <ListGroup fill>
            <ListGroupItem>{Name}</ListGroupItem>
            <ListGroupItem>{Spoiler}</ListGroupItem>
          </ListGroup>
        </Panel>
      )} else {
        return (
          <Panel header="Nothing to See Here"/>
        )
      }
    }

  render () {

    return (
      <div>{this.displaySpoiler()}</div>

    );
  }
};

export default SelectedCharacterView;
