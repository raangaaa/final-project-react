import {
	NOW_PLAYING,
	POPULAR,
	TOP_RATED,
	UPCOMING,
	TRENDING,
	SEARCH,
	FILTER,
	FAVORITE,
	RATED_MOVIE,
	WATCH_LIST,
	GENRE,
	DETAIL,
	RECOMMENDATION,
	SIMILAR,
} from "../actions/movieAction";

const movieState = {
	now_playings: [],
	populars: [],
	top_rateds: [],
	upcomings: [],
	trendings: [],
	searchs: [],
	filters: [],
	favorites: [],
	rated_movies: [],
	watch_lists: [],
	genres: [],
	recommendations: [],
	similars: [],
};

const movieReducer = (state = movieState, action) => {
	switch (action.type) {
		case NOW_PLAYING:
			return {
				...state,
				now_playings: action.payload,
			};
		case POPULAR:
			return {
				...state,
				populars: action.payload,
			};
		case TOP_RATED:
			return {
				...state,
				top_rateds: action.payload,
			};
		case UPCOMING:
			return {
				...state,
				upcomings: action.payload,
			};
		case TRENDING:
			return {
				...state,
				trendings: action.payload,
			};
		case SEARCH:
			return {
				...state,
				searchs: action.payload,
			};
		case FILTER:
			return {
				...state,
				filters: action.payload,
			};
		case FAVORITE:
			return {
				...state,
				favorites: action.payload,
			};
		case RATED_MOVIE:
			return {
				...state,
				rated_movies: action.payload,
			};
		case WATCH_LIST:
			return {
				...state,
				watch_lists: action.payload,
			};
		case GENRE:
			return {
				...state,
				genres: action.payload,
			};
		case DETAIL:
			return {
				...state,
				detail: action.payload,
			};
		case RECOMMENDATION:
			return {
				...state,
				recommendations: action.payload,
			};
		case SIMILAR:
			return {
				...state,
				similars: action.payload,
			};
		default:
			return state;
	}
};

export default movieReducer;
