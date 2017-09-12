

const initialState = [
  {
    Name: "Ned Stark",
    Spoiler: "He dead"
  },
  {
    Name: "Lady Olenna",
    Spoiler: "She dead"
  },
  {
    Name: "Hodor",
    Spoiler: "Ho-dead"
  },
  {
    Name: "Joffrey Baratheon",
    Spoiler: "Thankfully dead"
  },
  {
    Name: "Stannis Baratheon",
    Spoiler: "Also dead"
  },
  {
    Name: "Shireen Baratheon",
    Spoiler: "Well done"
  },
  {
    Name: "John Snow",
    Spoiler: "Likes his Aunt a little too much"
  },
]

export default function CharacterList(state = initialState, action = {}) {
  switch(action.type) {
  default:
    return state;
  }
}
