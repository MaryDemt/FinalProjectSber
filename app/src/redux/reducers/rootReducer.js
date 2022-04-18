

import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";




const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	comments: commentsReducer
})


export default rootReducer