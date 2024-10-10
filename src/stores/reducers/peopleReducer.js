import { POPULAR_PEOPLE, TRENDING_PEOPLE, DETAIL_PEOPLE } from "../actions/peopleAction";

const peopleState = {
	populars: [],
	trendings: [],
	detail: [],
};

const peopleReducer = (state = peopleState, action) => {
	switch (action.type) {
		case POPULAR_PEOPLE:
			return {
				...state,
				populars: action.payload,
			};
		case TRENDING_PEOPLE:
			return {
				...state,
				trendings: action.payload,
			};
		case DETAIL_PEOPLE:
			return {
				...state,
				detail: action.payload,
			};
		default:
			return state;
	}
};

export default peopleReducer;
