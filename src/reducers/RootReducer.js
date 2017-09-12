import { combineReducers } from 'redux';

import CharacterList from './CharacterList';
import SelectedCharacter from './SelectedCharacter';

export default combineReducers({
  CharacterList,
  SelectedCharacter
})
