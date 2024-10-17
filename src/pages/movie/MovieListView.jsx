import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { memo } from "react";

const MovieListView = ({ movie, list, title, page, isLoading, genreId }) => {
	return (
		<div
			id="movie"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen font-sans space-y-10 py-28"
		>
			<h1 className="text-4xl font-bold text-center">{title}</h1>

			<div className="w-[91.5%] grid grid-cols-5 mx-auto gap-4">
				{!isLoading
					? movie?.map((item, index) => (
							<div
								key={index}
								className="flex flex-col gap-2 justify-center items-center"
							>
								<Link to={"/detail/movie/" + item.id}>
									<Card data={item} />
								</Link>
							</div>
					  ))
					: Array.from({ length: 20 }, (_, index) => (
							<div
								key={index}
								className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
							></div>
					  ))}
			</div>

			<div className="w-full flex justify-center pt-10">
				<div className="join">
					<Link
						to={`/explore/movie/${list}?page=${
							parseInt(page) > 1 && parseInt(page) <= 500
								? parseInt(page) - 1
								: 1
						}${genreId ? "&genre_id=" + genreId : ""}`}
						className="join-item btn"
					>
						«
					</Link>
					<button className="join-item btn">Page {page ?? 1}</button>
					<Link
						to={`/explore/movie/${list}?page=${
							parseInt(page) > 1 && parseInt(page) < 500
								? parseInt(page) + 1
								: 2
						}${genreId ? "&genre_id=" + genreId : ""}`}
						className="join-item btn"
					>
						»
					</Link>
				</div>
			</div>
		</div>
	);
};

MovieListView.propTypes = {
	movie: PropTypes.array,
	list: PropTypes.string,
	title: PropTypes.string,
	page: PropTypes.string,
	isLoading: PropTypes.bool,
	genreId: PropTypes.string,
};

export default memo(MovieListView);
