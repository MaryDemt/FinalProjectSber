import { API_TOKEN } from "../../constants";
import { ADD_COMMENT, DELETE_COMMENT, SET_COMMENTS } from "../types/commentTypes";

export const setAllComments = (allComments) => ({
	type: SET_COMMENTS,
	payload: allComments
})

export const loadAllComments = (_id) => async (dispatch) => {
	const response = await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
		headers: {
			authorization: `Bearer ${API_TOKEN}` 
		}
	})

	const commentsFromApi = await response.json()

	dispatch(setAllComments(commentsFromApi))
}

export const addNewComment = (allComments) => ({
	type: ADD_COMMENT,
	payload: allComments
})

export const queryNewComment = (comment, _id) => async (dispatch) => {

	const response = await fetch(`https://api.react-learning.ru/posts/comments/${_id}`, {
		method: "POST",
		headers: {
			authorization: `Bearer ${API_TOKEN}`,
			'Content-Type': 'application/json' 
		},
		body: comment
	})

	const commentFromApi = await response.json()

	dispatch(addNewComment(commentFromApi))

}

export const deleteComment = (_id, postId) => ({
    type: DELETE_COMMENT,
    payload: _id, postId
})
export const deleteCommentQuery = (_id, postId) => async (dispatch) => {
    const response = await fetch(`https://api.react-learning.ru/posts/comments/${postId}/${_id} `, {
      method: 'DELETE',
	  headers: {
		authorization: `Bearer ${API_TOKEN}`,
	},
	
    })

    if (response.status === 200) {
      dispatch(deleteComment(_id))
    }
}