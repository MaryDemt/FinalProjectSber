

import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { personReducer } from "./personReducer";
import postsReducer from "./postsReducer";
import { searchReducer } from "./searchReducer";




const rootReducer = combineReducers({
	posts: postsReducer,
	search: searchReducer,
	comments: commentsReducer,
	likes: postsReducer,
	person: personReducer
})


export default rootReducer