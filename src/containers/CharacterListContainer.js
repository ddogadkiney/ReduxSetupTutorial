import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CharacterActions from '../actions/CharacterActions'

import CharacterListView from '../components/CharacterListView'

const CharacterListContainer = ({ CharacterList, actions }) => (

    <CharacterListView
     CharacterList = {CharacterList}
     showSpoiler = {actions.showSpoiler}
    />
)

const mapStateToProps = state => ({
  CharacterList: state.CharacterList,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CharacterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListContainer)
