import { useParams } from "react-router-dom";
import DetailView from "./DetailMovieView";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const DetailMovie = () => {
	const [detailMovie, setDetailMovie] = useState({});
	const [images, setImages] = useState({});
	const [alternativeTitles, setAlternativeTitles] = useState([]);
	const [recom, setRecom] = useState([]);
	const [similars, setSimilars] = useState([]);
	const [reviews, setReviews] = useState([]);
	const { id } = useParams();
	// const [statusRating, setStatusRating] = useState({});
	const headers = useMemo(
		() => ({
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			Accept: "application/json",
		}),
		[]
	);

	const addRating = async (movieId, rating) => {
		try {
			const response = await axios.post(
				`https://api.themoviedb.org/3/movie/${movieId}/rating`,
				{ value: rating },
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
						"Content-Type": "application/json;charset=utf-8",
						accept: "application/json",
					},
				}
			);
			if(response.data.status_code == 1) {
				toast.success("Success add rating")
			} else if(response.data.status_code == 12) {
				toast.success("Success update rating");
			} else {
				toast.error("Failed add rating");
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	const fetchDetailMovie = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}`,
				{
					headers,
				}
			);
			setDetailMovie(response.data);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	const fetchImages = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/images`,
				{
					headers,
				}
			);
			setImages(response.data);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	const fetchAlternativeTitle = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/alternative_titles`,
				{
					headers,
				}
			);
			setAlternativeTitles(response.data.titles);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	const fetchRecommendationsMovie = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/recommendations`,
				{
					headers,
				}
			);
			setRecom(response.data.results);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	const fetcSimilarsMovie = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/similar`,
				{
					headers,
				}
			);
			setSimilars(response.data.results);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	const fetchReviews = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/reviews`,
				{
					headers,
				}
			);
			setReviews(response.data.results);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	useEffect(() => {
		const getData = async () => {
			await Promise.all([
				fetchDetailMovie(),
				fetchImages(),
				fetchAlternativeTitle(),
				fetchRecommendationsMovie(),
				fetcSimilarsMovie(),
				fetchReviews(),
			]);
		};

		getData();
	}, [
		fetcSimilarsMovie,
		fetchAlternativeTitle,
		fetchDetailMovie,
		fetchImages,
		fetchRecommendationsMovie,
		fetchReviews,
	]);

	return (
		<>
			<Toaster />	
			<DetailView
				detailMovie={detailMovie}
				images={images}
				alternativeTitles={alternativeTitles}
				recomens={recom}
				similars={similars}
				reviews={reviews}
				addRating={addRating}
			/>
		</>
	);
};

export default DetailMovie;
