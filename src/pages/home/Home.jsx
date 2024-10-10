import axios from "axios";
import HomeView from "./HomeView";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setNowPlaying,
	setPopular,
	setUpcoming,
	setTopRated,
	setTrending,
} from "../../stores/actions/movieAction";
import { setPopularPeople } from "../../stores/actions/peopleAction";

const Home = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	const headers = useMemo(
		() => ({
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			Accept: "application/json",
		}),
		[]
	);

	const fetchNowPlaying = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/movie/now_playing?append_to_response=videos",
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

	const fetchPopularPeople = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/person/popular",
				{ headers }
			);
			dispatch(setPopularPeople(response.data.results));
		} catch (err) {
			console.error(err.message);
		}
	}, [dispatch, headers]);

	const [video, setVideo] = useState("");
	const [randomMovie, setRamdomMovie] = useState({});

	const getRandomMovieWithVideos = useCallback(async () => {
		try {
			const randomIndex = Math.floor(
				Math.random() * state.movie?.now_playings.length
			);
			const randomMovie = await state.movie.now_playings[randomIndex];
			setRamdomMovie(randomMovie);

			const videosResponse = await axios.get(
				`https://api.themoviedb.org/3/movie/${randomMovie.id}/videos`,
				{ headers }
			);

			// Tampilkan hasil
			if (videosResponse.data.results.length > 0) {
				const id = videosResponse.data.results.find(
					(result) => result.type === "Trailer"
				).key;
				const id2 = videosResponse.data.results.find(
					(result) => result.type === "Teaser"
				).key;
				setVideo(
					`https://www.youtube.com/embed/${
						id ?? id2
					}?controls=0&modestbranding=1&autoplay=1&mute=1&loop=1&showinfo=0&playlist=${
						id ?? id2
					}`
				);
			} else {
				console.log("Tidak ada video trailer tersedia.");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}, [headers, state.movie.now_playings]);

	useEffect(() => {
		getRandomMovieWithVideos();
	}, [getRandomMovieWithVideos]);

	useEffect(() => {
		const getData = async () => {
			Promise.all([
				fetchNowPlaying(),
				fetchPopular(),
				fetchTopRated(),
				fetchTrending(),
				fetchUpcoming(),
				fetchPopularPeople(),
			]);
		};

		getData();
	}, [
		fetchNowPlaying,
		fetchPopular,
		fetchPopularPeople,
		fetchTopRated,
		fetchTrending,
		fetchUpcoming,
	]);

	return (
		<HomeView
			movie={state.movie}
			person={state.people}
			video={video}
			randomMovie={randomMovie}
		/>
	);
};

export default Home;
