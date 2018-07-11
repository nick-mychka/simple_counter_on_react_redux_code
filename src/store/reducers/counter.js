import * as actionTypes from '../action';

const initialState = {
	counter: 0
}
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.INCREMENT:
			const NewState = Object.assign({}, state);
			NewState.counter = state.counter + 1;
			return NewState;
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.value
			}
		case actionTypes.SUBTRACT:
			return {
				...state,
				counter: state.counter - action.value
			}
	}
	return state;
}

export default reducer;