import React, { Component } from 'react';
import {
  Panel,
  ListGroupItem,
  ListGroup,
  Button
} from 'react-bootstrap'

class CharacterList extends Component {

  dispayNames(){
    let { CharacterList, showSpoiler } = this.props
    return CharacterList.map((character, index)=>{
      return(
        <ListGroupItem key={index}>
           <Button onClick={() => showSpoiler(character)} bsStyle="danger" block>{character.Name}</Button>
        </ListGroupItem> )
    })
  }

  render () {
    return (
      <Panel header="Character List">
        <ListGroup fill>
          {this.dispayNames()}
        </ListGroup>
      </Panel>
    );
  }
};

export default CharacterList;
