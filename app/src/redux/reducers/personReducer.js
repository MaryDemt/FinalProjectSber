import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../types/personTypes'

export const personReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				...action.payload
			}
        case SIGN_UP:
      		return {
        ...state,
        ...action.payload,
      		}
        case SIGN_OUT:
      		return {
        ...state,
        ...action.payload,
			}
		
		default:
			return state
	}
}

