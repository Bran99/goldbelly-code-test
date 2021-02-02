import { GET_URLS, SET_LOADING } from '../types';

const urlReducer = (state, action) => {
	switch (action.type) {
		case GET_URLS:
			return {
				...state,
				urls: action.payload,
				slug: '',
				loading: false
			};

		case SET_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
};

export default urlReducer;
