import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CharacterListView from '../components/CharacterListView'

const CharacterCreationPageContainer = ({ CharacterList }) => (
    <CharacterListView
     CharacterList = {CharacterList}
    />
)

const mapStateToProps = state => ({
  CharacterList: state.CharacterList,
})


export default connect(
  mapStateToProps
)(CharacterCreationPageContainer)
