

import { ADD_NEW_POST, DELETE_POST, SET_ALL_POSTS } from '../types/postsTypes'


const postsReducer = (state = [], action) => {

	switch (action.type) {
		case SET_ALL_POSTS:
			return action.payload
		
		case ADD_NEW_POST: 
			return [
				...state,
				action.payload
			]

		case DELETE_POST:
            return state.filter((post) => post.id !== action.payload)
		
		default:
			return state
	}
}

export default postsReducer