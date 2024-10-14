import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteWatchList,
	setWatchList,
} from "../../stores/actions/movieAction";
import WatchlistView from "./WatchlistView";

const Watchlist = () => {
	const { watchlists } = useSelector((state) => state.movie);
	const dispatch = useDispatch();
	const [isLoading, setIsloading] = useState(true);

	const fetchWatchlistMovie = useCallback(async () => {
		setIsloading(true);
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/account/21559324/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc",
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
						Accept: "application/json",
					},
				}
			);
			dispatch(setWatchList(response.data));
			setIsloading(false);
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch]);

	const deleteWatchlistMovie = async (movieId) => {
		try {
			const response = await axios.post(
				`https://api.themoviedb.org/3/account/21559324/watchlist`,
				{ media_type: "movie", media_id: movieId, watchlist: false },
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
						"Content-Type": "application/json;charset=utf-8",
						accept: "application/json",
					},
				}
			);
			if (response.data.status_code == 13) {
				toast.success("Success remove from watchlist");
				dispatch(
					deleteWatchList({
						...watchlists,
						results: watchlists.results.filter((item) => item.id !== movieId),
					})
				);
			} else {
				toast.error("Failed remove from watchlist");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchWatchlistMovie();
	}, [fetchWatchlistMovie]);

	return (
		<>
			<Toaster />
			<WatchlistView
				watchlists={watchlists}
				isLoading={isLoading}
				deleteWatchlistMovie={deleteWatchlistMovie}
			/>
		</>
	);
};

export default Watchlist;
