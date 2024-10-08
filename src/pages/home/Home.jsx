import axios from "axios";
import HomeView from "./HomeView";

const Home = () => {
	const options = {
		method: "GET",
		url: "https://api.themoviedb.org/3/movie/changes",
		params: { page: "1" },
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWY4MTAxYjU4NTlhMzY5YWFkNzIwNzRjM2RmOWNmNCIsIm5iZiI6MTcyODM1ODI2Ny44NTI5NzcsInN1YiI6IjY3MDQ4MWMzMmFlN2ViOTA4NGJmZjhlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6BppuE5MXfrSbr3Y9rKHLakSCMrjUH_D5iAwVBNkZWs",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});

	console.log(import.meta.env.VITE_API_KEY);

	return <HomeView />;
};

export default Home;
