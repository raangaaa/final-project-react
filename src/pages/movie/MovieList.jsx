import { useCallback, useEffect, useMemo } from "react";
import MovieListView from "./MovieListView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
	setNowPlaying,
	setPopular,
	setUpcoming,
	setTopRated,
	setTrending,
	setFilter,
} from "../../stores/actions/movieAction";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Error404 from "../error/Error404";

const MovieList = () => {
	const { now_playings, trendings, upcomings, populars, top_rateds, filters } =
		useSelector((state) => state.movie);
	const dispatch = useDispatch();
	const [queryParams] = useSearchParams();
	const navigate = useNavigate();
	const { list } = useParams();
	const page = queryParams.get("page") ?? "1";
	const genreId = queryParams.get("genre_id");
	const apiUrls = useMemo(
		() => ({
			playingnow: `https://api.themoviedb.org/3/movie/now_playing?page=${page}`,
			trending: `https://api.themoviedb.org/3/trending/movie/week?page=${page}`,
			upcoming: `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
			popular: `https://api.themoviedb.org/3/movie/popular?page=${page}`,
			toprated: `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
			genre: `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc${
				genreId ? "&with_genres=" + genreId : ""
			}`,
		}),
		[genreId, page]
	);

	const fetchMovies = useCallback(async () => {
		const url = apiUrls[list.toLowerCase()];

		if (!url) {
			console.warn("Invalid list type:", list);
			return;
		}

		try {
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
					Accept: "application/json",
				},
			});

			switch (list.toLowerCase()) {
				case "playingnow":
					dispatch(setNowPlaying(response.data.results));
					console.log("now");
					break;
				case "trending":
					dispatch(setTrending(response.data.results));
					console.log("trending");
					break;
				case "upcoming":
					dispatch(setUpcoming(response.data.results));
					console.log("upcoming");
					break;
				case "toprated":
					dispatch(setTopRated(response.data.results));
					console.log("toprated");
					break;
				case "popular":
					dispatch(setPopular(response.data.results));
					console.log("popular");
					break;
				case "genre":
					dispatch(setFilter(response.data.results));
					console.log("genre");
					break;
				default:
					console.warn("No action defined for list type:", list);
			}
		} catch (err) {
			console.error(err.message);
		}
	}, [apiUrls, dispatch, list]);

	useEffect(() => {
		if (
			list.toLowerCase() === "playingnow" ||
			list.toLowerCase() === "trending" ||
			list.toLowerCase() === "popular" ||
			list.toLowerCase() === "toprated" ||
			list.toLowerCase() === "upcoming" ||
			list.toLowerCase() === "genre"
		) {
			fetchMovies();
		}
	}, [fetchMovies, list]);

	if (!list) {
		navigate("/explore");
		return null;
	}

	switch (list.toLowerCase()) {
		case "playingnow":
			return <MovieListView movie={now_playings} list={list} page={page} />;
		case "trending":
			return <MovieListView movie={trendings} list={list} page={page} />;
		case "upcoming":
			return <MovieListView movie={upcomings} list={list} page={page} />;
		case "popular":
			return <MovieListView movie={populars} list={list} page={page} />;
		case "toprated":
			return <MovieListView movie={top_rateds} list={list} page={page} />;
		case "genre":
			if (!genreId) {
				navigate("/explore?tab=genre");
				return null;
			} else {
				return <MovieListView movie={filters} list={list} page={page} genreId={genreId} />;
			}
		default:
			console.log(list);
			return <Error404 />;
	}
};

export default MovieList;
