import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DetailView = ({ detailMovie, backdrops }) => {
	return (
		<div
			id="detail"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen py-14"
		>
			<div className="flex relative">
				<div className="w-[38%] flex flex-col justify-center gap-5 pl-20">
					<h1 className="text-3xl font-semibold font-sans">
						{detailMovie?.title}
					</h1>
					<p className="text-sm dark:text-gray-300">
						⭐ {detailMovie?.vote_average}
						<span className="font-extralight text-xs"> | </span>
						{detailMovie?.vote_count} Users
						<span className="font-extralight text-xs"> | </span>
						🚀 {detailMovie?.popularity}
					</p>
					<p className="text-sm dark:text-gray-300">
						🎬
						<span className="font-extralight text-xs"> | </span>
						{detailMovie?.adult ? "18+" : detailMovie?.release_date}
						<span className="font-extralight text-xs"> | </span>
						{detailMovie?.adult
							? detailMovie?.release_date +
							  <span className="font-extralight text-xs"> | </span>
							: ""}
						{detailMovie?.runtime}mins
						<span className="font-extralight text-xs"> | </span>
						{detailMovie?.genres?.map((genre) => genre.name).join(", ")}
					</p>
					<p className="text-sm w-4/5">{detailMovie?.overview}</p>
					<div className="flex gap-2">
						<Link
							to={"https://www.imdb.com/title/" + detailMovie?.imdb_id}
							className="btn btn-warning"
						>
							IMDB
						</Link>
						<Link
							to={detailMovie?.homepage}
							className="btn btn-primary text-white"
						>
							Official
						</Link>
						<button className="btn bg-red-600 border-none">
							<svg
								className="w-6 h-6 text-white"
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
									d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
								/>
							</svg>
						</button>
						<button className="btn bg-yellow-500 border-none">
							<svg
								className="w-6 h-6 text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									strokeWidth="2"
									d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
								/>
								<path
									stroke="currentColor"
									strokeWidth="2"
									d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="w-[62%] relative">
					<img
						src={
							"https://image.tmdb.org/t/p/original" + detailMovie?.backdrop_path
						}
					/>
					<div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r dark:from-megenta-300 from-slate-300 via-transparent to-transparent"></div>
					<div className="absolute top-0 left-0 h-full w-full dark:bg-megenta-300 bg-slate-300 opacity-40"></div>
				</div>
			</div>

			<div className="grid grid-cols-5 w-full min-h-screen p-20">
				<div className="col-span-1">
					<div className="sticky top-24">
						<div className="text-lg font-medium py-3 px-4 border-l-8 border-slate-800">
							Overview
						</div>
						<div className="text-lg font-medium py-3 px-4 border-l-8 border-slate-800">
							Companies
						</div>
						<div className="text-lg font-medium py-3 px-4 border-l-8 border-slate-800">
							Recommendations
						</div>
						<div className="text-lg font-medium py-3 px-4 border-l-8 border-slate-800">
							Similars
						</div>
					</div>
				</div>
				<div className="col-span-4"></div>
			</div>
		</div>
	);
};

DetailView.propTypes = {
	detailMovie: PropTypes.object,
	backdrops: PropTypes.array,
};

export default DetailView;
