import { ADD_LIKE, DELETE_LIKE } from "../types/likesTypes"


const likesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIKE:
      return action.payload

    case DELETE_LIKE:
      return action.payload

    default:
      return state
  }
}

export default likesReducer