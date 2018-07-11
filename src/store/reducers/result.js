import * as actionTypes from '../action';

const initialState = {
	results: []
}
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: action.result})
			}
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const NewArray = [...state.results];
			// NewArray.slice(id, 1);
			const updatedArray = state.results.filter(result => result.id !== action.resultElId);
			return {
				...state,
				results: updatedArray
			}
	}
	return state;
}

export default reducer;