import { useParams } from "react-router-dom";
import DetailView from "./DetailView";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const Detail = () => {
	const [detailMovie, setDetailMovie] = useState({});
	const [backdrops, setBackdrops] = useState([]);

	console.log(detailMovie);
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

	const fetchImagesBackdrop = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/images`,
				{
					headers,
				}
			);
			setBackdrops(response.data.backdrops);
		} catch (err) {
			console.error(err.message);
		}
	}, [headers, id]);

	useEffect(() => {
		const getData = async () => {
            await Promise.all([
                fetchDetailMovie(),
                fetchImagesBackdrop(),
            ])
        }

        getData();
	}, [fetchDetailMovie, fetchImagesBackdrop]);

	return <DetailView detailMovie={detailMovie} backdrops={backdrops}/>;
};

export default Detail;
