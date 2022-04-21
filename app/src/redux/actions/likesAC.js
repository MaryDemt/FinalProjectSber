import { axiosInstance } from "../../config/axios";
import { SET_LIKE } from "../types/postsTypes";


export const addLike = (_id) => ({
    type: SET_LIKE,
    payload: _id,
  })
  
  export const addLikeQuery = (_id) => async (dispatch) => {
    const response = await axiosInstance.put(
      `posts/likes/${_id}`,
    )
    const likesFromServer = await response.data
    // const likesFromServer = objectFromServer.likes
    dispatch(addLike(likesFromServer))
  }
  
  const deleteLike = (likesFromServer) => ({
    type: SET_LIKE,
    payload: likesFromServer,
  })
  
  export const deleteLikeQuery = (_id) => async (dispatch) => {
    const response = await axiosInstance.delete(
      `posts/likes/${_id}`,
    )
    const likesFromServer = await response.data
    // const likesFromServer = objectFromServer.likes
    // console.log(likesFromServer)
    dispatch(deleteLike(likesFromServer))
  }