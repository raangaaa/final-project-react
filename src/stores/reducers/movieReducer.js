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
	RECOMMENDATION,
	SIMILAR,
	DELETE_RATING,
	DELETE_FAVORITE,
	DELETE_WATCH_LIST,
} from "../actions/movieAction";

const movieState = {
	now_playings: [],
	trendings: [],
	populars: [],
	upcomings: [],
	top_rateds: [],

	searchs: [],
	filters: [],

	rated_movies: [],
	genres: [],
	recommendations: [],
	similars: [],

	favorites: {},
	watchlists: {},
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
				watchlists: action.payload,
			};
		case GENRE:
			return {
				...state,
				genres: action.payload,
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
		case DELETE_RATING:
			return {
				...state,
				rated_movies: action.payload,
			};
		case DELETE_FAVORITE:
			return {
				...state,
				favorites: action.payload,
			};
		case DELETE_WATCH_LIST:
			return {
				...state,
				watchlists: action.payload,
			};
		default:
			return state;
	}
};

export default movieReducer;
