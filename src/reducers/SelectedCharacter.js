import { SHOW_SPOILER } from '../constants/ActionTypes'

const initialState = {}

export default function SelectedCharacter(state = initialState, action = {}) {
  switch(action.type) {

    case SHOW_SPOILER:
    return {
      ...state,
      Name: action.character.Name,
      Spoiler: action.character.Spoiler,
    }

    default:
      return state;
  }
}
