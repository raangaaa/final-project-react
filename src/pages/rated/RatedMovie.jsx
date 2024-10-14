import { useDispatch, useSelector } from "react-redux";
import RatedMovieView from "./RatedMovieView";
import { useCallback, useEffect, useState } from "react";
import { deleteRating, setRatedMovie } from "../../stores/actions/movieAction";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const RatedMovie = () => {
	const { rated_movies } = useSelector((state) => state.movie);
	const dispatch = useDispatch();
	const [isLoading, setIsloading] = useState(true);
	const [queryParams] = useSearchParams();

	const page = queryParams.get("page") ?? "1";

	const fetchRatedMovie = useCallback(async () => {
		setIsloading(true);
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/account/21559324/rated/movies?page=" + page,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
						accept: "application/json",
					},
				}
			);
			dispatch(setRatedMovie(response.data));
			setIsloading(false);
			console.log(response.data)
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, page]);

	const deleteRatedMovie = async (movieId) => {
		try {
			const response = await axios.delete(
				`https://api.themoviedb.org/3/movie/${movieId}/rating`,
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
						accept: "application/json",
					},
				}
			);
			if (response.data.status_code == 13) {
				toast.success("Success delete rating");
				dispatch(
					deleteRating({
						...rated_movies,
						results: rated_movies.results.filter((item) => item.id !== movieId),
					})
				);
			} else if (response.data.status_code == 34) {
				toast.success("Failed delete rating, not found");
			} else {
				toast.error("Failed delete rating");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchRatedMovie();
	}, [fetchRatedMovie]);

	return (
		<>
			<Toaster />
			<RatedMovieView
				rated_movies={rated_movies}
				deleteRatedMovie={deleteRatedMovie}
				isLoading={isLoading}
			/>
		</>
	);
};

export default RatedMovie;
// <Toaster />
