import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./stores/store";
import Detail from "./pages/detail/DetailMovie";
import Error404 from "./pages/error/Error404";
import Explore from "./pages/explore/Explore";
import MovieList from "./pages/movie/MovieList";
import RatedMovie from "./pages/rated/RatedMovie";

//
const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} /> {/* Homepage */}
					<Route path="/explore" element={<Explore />} /> {/* Explore => search, movie, genre, person */}
					<Route path="/explore/movie/:list" element={<MovieList />} /> {/* All movie by sortlist */}
					<Route path="/detail/movie/:id" element={<Detail />} />
					<Route path="/detail/person/:id" />
					<Route path="/detail/company/:id" />
					<Route path="/favorite" />
					<Route path="/watchlist" />
					<Route path="/rated/movie" element={<RatedMovie />} />
					<Route path="/*" element={<Error404 />} />
				</Routes>
				<Footer />
			</Provider>
		</BrowserRouter>
	);
};

export default App;
