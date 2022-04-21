


import { ADD_NEW_POST, DELETE_POST, SET_ALL_POSTS, SET_LIKE, SET_POST, UPDATE_POST } from '../types/postsTypes'


const postsReducer = (state = [], action) => {

	switch (action.type) {
		case SET_ALL_POSTS:
			return action.payload
		
		case ADD_NEW_POST: 
			return [
				...state,
				action.payload
			]

		case UPDATE_POST: 
            return state.length
              ? state.map((post) => {
                if(post._id === action.payload._id) {
                    return action.payload
                }
                return post
            }) : [action.payload]

		case SET_POST:
			return state.filter((post) => post._id === action.payload)

		case DELETE_POST:
            return state.filter((post) => post.id !== action.payload)

		case SET_LIKE:
			return state.map((post)=> {
				if (post._id === action.payload._id) return action.payload
			   return post
			   }) 
		  

		default:
			return state
	}
}

export default postsReducer