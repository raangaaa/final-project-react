import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { memo } from "react";

const MovieListView = ({ movie, list, page, genreId }) => {
	return (
		<div
			id="movie"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen font-sans space-y-10 py-28"
		>
			<h1 className="text-4xl font-bold text-center">{list}</h1>

			<div className="w-[91.5%] grid grid-cols-5 mx-auto gap-4">
				{movie?.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-2 justify-center items-center"
					>
						<Link to={"/detail/movie/" + item.id}>
							<Card data={item} />
						</Link>
					</div>
				))}
			</div>

			<div className="w-full flex justify-center pt-10">
				<div className="join">
					<Link
						to={`/explore/movie/${list}?page=${
							parseInt(page) > 1 ? parseInt(page) - 1 : 1
						}${genreId ? "&genre_id=" + genreId : ""}`}
						className="join-item btn"
					>
						«
					</Link>
					<button className="join-item btn">Page {page ?? 1}</button>
					<Link
						to={`/explore/movie/${list}?page=${
							parseInt(page) > 1 ? parseInt(page) + 1 : 2
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
	page: PropTypes.string,
	genreId: PropTypes.string,
};

export default memo(MovieListView);
