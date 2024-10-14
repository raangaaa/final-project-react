import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const FavoriteView = ({ favorites, isLoading, deleteFavoriteMovie }) => {
	return (
		<div
			id="favorite"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen font-sans space-y-10 py-28"
		>
			<h1 className="text-4xl font-bold text-center">Favorite Movie</h1>

			<div className="w-[91.5%] grid grid-cols-5 mx-auto gap-4">
				{!isLoading
					? favorites?.results?.map((item, index) => (
							<div
								key={index}
								className="flex flex-col gap-2 justify-center items-center"
							>
								<Link to={"/detail/movie/" + item.id}>
									<Card data={item} />
								</Link>
								<button
									onClick={() => deleteFavoriteMovie(item.id)}
									type="button"
									className="flex items-center gap-2 outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700"
								>
									<svg
										className="w-4 h-4text-white"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
										/>
									</svg>
									Delete favorite
								</button>
							</div>
					  ))
					: Array.from({ length: 20 }, (_, index) => (
							<div
								key={index}
								className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
							></div>
					  ))}
			</div>
		</div>
	);
};

FavoriteView.propTypes = {
	favorites: PropTypes.object,
	isLoading: PropTypes.bool,
	deleteFavoriteMovie: PropTypes.func.isRequired
};

export default FavoriteView
