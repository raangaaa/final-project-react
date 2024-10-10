// list movie
export const NOW_PLAYING = "NOW_PLAYING";
export const POPULAR = "POPULAR";
export const TOP_RATED = "TOP_RATED";
export const UPCOMING = "UPCOMING";
export const TRENDING = "TRENDING";

export const SEARCH = "SEARCH";
export const FILTER = "FILTER";

// detail movie
export const DETAIL = "DETAIL";
export const RECOMMENDATION = "RECOMMENDATION";
export const SIMILAR = "SIMILAR";

// other
export const GENRE = "GENRE";

// list movie user
export const FAVORITE = "FAVORITE";
export const RATED_MOVIE = "RATED_MOVIE";
export const WATCH_LIST = "WATCH_LIST";

// list movie
export const setNowPlaying = (data) => ({
	type: NOW_PLAYING,
	payload: data,
});

export const setPopular = (data) => ({
	type: POPULAR,
	payload: data,
});

export const setTopRated = (data) => ({
	type: TOP_RATED,
	payload: data,
});

export const setUpcoming = (data) => ({
	type: UPCOMING,
	payload: data,
});

export const setTrending = (data) => ({
	type: TRENDING,
	payload: data,
});

export const setSearch = (data) => ({
	type: SEARCH,
	payload: data,
});

export const setFilter = (data) => ({
	type: FILTER,
	payload: data,
});

// detail movie
export const setDetail = (data) => ({
	type: DETAIL,
	payload: data,
});

export const setRecommendation = (data) => ({
	type: RECOMMENDATION,
	payload: data,
});

export const setSimilar = (data) => ({
	type: SIMILAR,
	payload: data,
});

// other
export const setGenre = (data) => ({
	type: GENRE,
	payload: data,
});

// list movie user
export const setFavorite = (data) => ({
	type: FAVORITE,
	payload: data,
});

export const setRatedMovie = (data) => ({
	type: RATED_MOVIE,
	payload: data,
});

export const setWatchList = (data) => ({
	type: WATCH_LIST,
	payload: data,
});
