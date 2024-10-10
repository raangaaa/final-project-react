import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./stores/store";

//
const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} /> {/* Homepage */}
					<Route path="/explore" /> {/* Explore => movie, genre, person */}
					<Route path="/explore/movie" /> {/* All movie by genre */}
					<Route path="/explore/movie/{list}" /> {/* All movie by sortlist */}
					<Route path="/detail/movie/{id}" />
					<Route path="/detail/person/{id}" />
					<Route path="/detail/company/{id}" />
					<Route path="/favorite" />
					<Route path="/watch_list" />
					<Route path="/accoount/rated_movie" />
				</Routes>
				<Footer />
			</Provider>
		</BrowserRouter>
	);
};

export default App;
