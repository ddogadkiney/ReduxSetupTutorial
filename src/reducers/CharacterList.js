const initialState = [
  {
    Name: "Ned Stark",
    Spolier: "He dead"
  }
]

export default function CharacterList(state = initialState, action = {}) {
  switch(action.type) {
  default:
    return state;
  }
}
