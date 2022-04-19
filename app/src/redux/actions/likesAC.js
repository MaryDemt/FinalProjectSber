import { API_TOKEN } from "../../constants";
import { ADD_LIKE, DELETE_LIKE } from "../types/likesTypes";

export const addLike = (data) => ({
    type: ADD_LIKE,
    payload: data,
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
    const objectFromServer = await response.json()
    const likesFromServer = objectFromServer.likes
    console.log(likesFromServer)
    dispatch(addLike(likesFromServer))
  }
  
  const deleteLike = (data) => ({
    type: DELETE_LIKE,
    payload: data,
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
    const objectFromServer = await response.json()
    const likesFromServer = objectFromServer.likes
    console.log(likesFromServer)
    dispatch(deleteLike(likesFromServer))
  }