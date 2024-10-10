// list people
export const POPULAR_PEOPLE = "POPULAR_PEOPLE";
export const TRENDING_PEOPLE = "TRENDING_PEOPLE";

// detail
export const DETAIL_PEOPLE = "DETAIL_PEOPLE";


export const setPopularPeople = (data) => ({
	type: POPULAR_PEOPLE,
	payload: data,
});

export const setTrendingPeople = (data) => ({
	type: TRENDING_PEOPLE,
	payload: data,
});

export const setDetailPeople = (data) => ({
	type: DETAIL_PEOPLE,
	payload: data,
});