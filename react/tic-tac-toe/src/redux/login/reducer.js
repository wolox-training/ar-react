const initialState = {
	isLogged: false,
	token: undefined,
	pending: true
};

function reducer(state = initialState, action){
	switch(action.type) {
		case 'SAVE_TOKEN':
			return {
				...state,
				token: action.token,
				isLogged: true
			};
		case 'GET_USER_LOGGED':
			return {
				...state,
				pending: false
			};
		case 'CLEAR_TOKEN':
			return {
				...state,
				token: undefined
			}
		default:
			return state;
	}
};

export default reducer;
