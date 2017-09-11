import React, { Component } from 'react';

class CharacterList extends Component {

  dispayNames(){
    let { CharacterList } = this.props
    return CharacterList.map((character, index)=>{
      return( <li key={index}>{character.Name}</li> )
    })
  }

  render () {
    return (
      <ul>
       {this.dispayNames()}
      </ul>
    );
  }
};

export default CharacterList;
