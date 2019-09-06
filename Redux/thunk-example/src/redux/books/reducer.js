const initialState = {
  availableBooks: [{
    name: "Trevor"
  }]
}

export default function books(state = initialState, action) {
  switch (action.type){
    case "ADD_BOOK": {
      return { availableBooks: [...state.availableBooks, action.payload ]}
    }
    default: {
      return state
    }
  }
}