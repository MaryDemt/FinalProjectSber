import { API_TOKEN } from "../../constants";
import { SET_LIKE } from "../types/postsTypes";


export const addLike = (_id) => ({
    type: SET_LIKE,
    payload: _id,
  })
  
  export const addLikeQuery = (_id) => async (dispatch) => {
    const response = await fetch(
      `https://api.react-learning.ru/posts/likes/${_id}`,
      {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const likesFromServer = await response.json()
    // const likesFromServer = objectFromServer.likes
    dispatch(addLike(likesFromServer))
  }
  
  const deleteLike = (likesFromServer) => ({
    type: SET_LIKE,
    payload: likesFromServer,
  })
  
  export const deleteLikeQuery = (_id) => async (dispatch) => {
    const response = await fetch(
      `https://api.react-learning.ru/posts/likes/${_id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const likesFromServer = await response.json()
    // const likesFromServer = objectFromServer.likes
    // console.log(likesFromServer)
    dispatch(deleteLike(likesFromServer))
  }