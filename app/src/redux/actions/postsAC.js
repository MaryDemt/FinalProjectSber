import { axiosInstance } from '../../config/axios';
import { ADD_NEW_POST, DELETE_POST, SET_ALL_POSTS, UPDATE_POST } from '../types/postsTypes';

export const setAllPosts = (allPosts) => ({
	type: SET_ALL_POSTS,
	payload: allPosts
})

export const loadAllPosts = (searchValue) => async (dispatch) => {
	const urlForFetch = searchValue 
	? `posts/search/?query=${searchValue}`
    : "posts"; 
	const response = await axiosInstance.get(urlForFetch)

	const postsFromApi = response.data
	//console.log(postsFromApi)

	dispatch(setAllPosts(postsFromApi))

}


export const addNewPost = (allPosts) => ({
	type: ADD_NEW_POST,
	payload: allPosts
})

export const queryNewPost = (post) => async (dispatch) => {

	const response = await axiosInstance.post(
		'posts',
		post,
	)

	const postFromApi = await response.data

	dispatch(addNewPost(postFromApi))

}

export const deletePost = (_id) => ({
    type: DELETE_POST,
    payload: _id,
})
export const deletePostQuery = (_id) => async (dispatch) => {
    const response = await axiosInstance.delete(`posts/${_id}`, 
	)

    if (response.status === 200) {
      dispatch(deletePost(_id))
	  alert("Вы удалили пост:(")
    } else {
			alert("Нельзя удалять чужие посты!")
		  }

}

const updatePost = (newPostObject) => ({
    type: UPDATE_POST, 
    payload: newPostObject,
})

export const updatePostQuery = (_id, formData, closeModal) => async (dispatch) => {
	const response = await axiosInstance.patch(`posts/${_id}`,
	formData
	)
  
	  if (response.status === 200) {
		const updatedPostFromServer = await response.data
		dispatch(updatePost(updatedPostFromServer))
		closeModal()
	  } else {
		alert('Wrong data')
	  }
	}

	  