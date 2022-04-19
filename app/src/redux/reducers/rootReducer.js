

import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import likesReducer from "./likesReducer";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";




const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	comments: commentsReducer,
	likes: likesReducer
})


export default rootReducer