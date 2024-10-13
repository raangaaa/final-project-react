import { useDispatch, useSelector } from "react-redux";
import RatedMovieView from "./RatedMovieView";
import { useCallback, useEffect, useMemo } from "react";
import { setRatedMovie } from "../../stores/actions/movieAction";
import axios from "axios";

const RatedMovie = () => {
	const { rated_movies } = useSelector((state) => state.movie);
	const dispatch = useDispatch();

	const headers = useMemo(
		() => ({
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			Accept: "application/json",
		}),
		[]
	);

	const fetchRatedMovie = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/account/21559324/rated/movies",
				{ headers }
			);
			dispatch(setRatedMovie(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

    useEffect(() => {
        fetchRatedMovie();
    }, [fetchRatedMovie])

	return <RatedMovieView movie={rated_movies} />;
};

export default RatedMovie;
