import { useDispatch, useSelector } from "react-redux";
import ExploreView from "./ExploreView";
import ExploreGenreView from "./ExploreGenreView";
import ExplorePersonView from "./ExplorePerson";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
	setNowPlaying,
	setPopular,
	setUpcoming,
	setTopRated,
	setTrending,
	setGenre,
} from "../../stores/actions/movieAction";
import { useSearchParams } from "react-router-dom";
import { setPopularPeople } from "../../stores/actions/peopleAction";

const Explore = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const [queryParams] = useSearchParams();
	const headers = useMemo(
		() => ({
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			Accept: "application/json",
		}),
		[]
	);

	const tab = queryParams.get("tab");
	const page = queryParams.get("page");

	const fetchPopularPeople = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/person/popular?page=` + (page ?? 1),
				{ headers }
			);
			dispatch(setPopularPeople(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers, page]);

	const fetchMovieGenre = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/genre/movie/list",
				{ headers }
			);
			console.log(response);
			dispatch(setGenre(response.data.genres));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	const fetchNowPlaying = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/movie/now_playing",
				{ headers }
			);
			dispatch(setNowPlaying(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	const fetchPopular = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/movie/popular",
				{ headers }
			);
			dispatch(setPopular(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	const fetchUpcoming = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/movie/upcoming",
				{ headers }
			);
			dispatch(setUpcoming(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	const fetchTopRated = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/movie/top_rated",
				{ headers }
			);
			dispatch(setTopRated(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	const fetchTrending = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/trending/movie/week",
				{ headers }
			);
			dispatch(setTrending(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	useEffect(() => {
		const getData = async () => {
			await Promise.all([
				fetchNowPlaying(),
				fetchPopular(),
				fetchTopRated(),
				fetchTrending(),
				fetchUpcoming(),
			]);

			setIsLoading(false);
		};

		getData();
	}, [
		fetchNowPlaying,
		fetchPopular,
		fetchTopRated,
		fetchTrending,
		fetchUpcoming,
	]);

	useEffect(() => {
		fetchMovieGenre();
	}, [fetchMovieGenre]);

	useEffect(() => {
		fetchPopularPeople();
	}, [fetchPopularPeople]);

	if (tab !== null && tab.toLowerCase() === "genre") {
		return <ExploreGenreView genres={state.movie.genres} />;
	}

	if (tab !== null && tab.toLowerCase() === "person") {
		return <ExplorePersonView person={state.people} page={page} />;
	}

	return <ExploreView movie={state.movie} isLoading={isLoading} />;
};

export default Explore;
