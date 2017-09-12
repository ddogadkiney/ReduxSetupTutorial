import React from 'react'
import { connect } from 'react-redux'

import SelectedCharacterView from '../components/SelectedCharacterView'

const SelectedCharacterContainer = ({ SelectedCharacter }) => (
    <SelectedCharacterView
     SelectedCharacter = {SelectedCharacter}
    />
)

const mapStateToProps = state => ({
  SelectedCharacter: state.SelectedCharacter,
})

export default connect(
  mapStateToProps
)(SelectedCharacterContainer)
