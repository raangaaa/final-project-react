import { useParams } from "react-router-dom";
import DetailView from "./DetailView";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const Detail = () => {
	const [detailMovie, setDetailMovie] = useState({});
	const [images, setImages] = useState({});
	const [alternativeTitles, setAlternativeTitles] = useState([]);
	const [recom, setRecom] = useState([]);
	const [similars, setSimilars] = useState([]);
	const [reviews, setReviews] = useState([]);
	const { id } = useParams();

	const headers = useMemo(
		() => ({
			Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			Accept: "application/json",
		}),
		[]
	);

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
		<DetailView
			detailMovie={detailMovie}
			images={images}
			alternativeTitles={alternativeTitles}
			recomens={recom}
			similars={similars}
			reviews={reviews}
		/>
	);
};

export default Detail;
