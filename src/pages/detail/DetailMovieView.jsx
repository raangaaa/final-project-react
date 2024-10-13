import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { memo, useEffect, useState } from "react";

const DetailMovieView = ({
	detailMovie,
	images,
	alternativeTitles,
	recomens,
	similars,
	reviews,
	addRating,
}) => {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	const [nav, setNav] = useState(1);

	useEffect(() => {
		const open = (sectionId) => {
			const section = document.getElementById(sectionId);
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		};
		open("detail");
	}, []);

	return (
		<div
			id="detail"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen py-14"
		>
			<div className="absolute top-28 left-1/2 z-[99]">

			</div>
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
					<div className="rating">
						<input
							type="radio"
							className="mask mask-star-2 bg-red-500"
							name="rating-2"
							value={2}
							onChange={(i) => addRating(detailMovie?.id, i.target.value)}
						/>
						<input
							type="radio"
							className="mask mask-star-2 bg-red-500"
							name="rating-2"
							value={4}
							onChange={(i) => addRating(detailMovie?.id, i.target.value)}
						/>
						<input
							type="radio"
							className="mask mask-star-2 bg-red-500"
							name="rating-2"
							value={6}
							onChange={(i) => addRating(detailMovie?.id, i.target.value)}
						/>
						<input
							type="radio"
							className="mask mask-star-2 bg-red-500"
							name="rating-2"
							value={8}
							onChange={(i) => addRating(detailMovie?.id, i.target.value)}
						/>
						<input
							type="radio"
							className="mask mask-star-2 bg-red-500"
							name="rating-2"
							value={10}
							onChange={(i) => addRating(detailMovie?.id, i.target.value)}
						/>
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
					<aside className="sticky top-24 flex flex-col">
						<a
							href={"#overview"}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("overview");
								setNav(1);
							}}
							className={`text-lg font-medium py-3 px-4 border-l-8 ${
								nav == 1
									? "border-blue-900"
									: "dark:border-slate-800 border-gray-400"
							}`}
						>
							Overview
						</a>
						<a
							href={"#images"}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("images");
								setNav(2);
							}}
							className={`text-lg font-medium py-3 px-4 border-l-8 ${
								nav == 2
									? "border-blue-900"
									: "dark:border-slate-800 border-gray-400"
							}`}
						>
							Images
						</a>
						<a
							href={"#companies"}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("companies");
								setNav(3);
							}}
							className={`text-lg font-medium py-3 px-4 border-l-8 ${
								nav == 3
									? "border-blue-900"
									: "dark:border-slate-800 border-gray-400"
							}`}
						>
							Companies
						</a>
						<a
							href={"#recommendations"}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("recommendations");
								setNav(4);
							}}
							className={`text-lg font-medium py-3 px-4 border-l-8 ${
								nav == 4
									? "border-blue-900"
									: "dark:border-slate-800 border-gray-400"
							}`}
						>
							Recommendations
						</a>
						<a
							href={"#similars"}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("similars");
								setNav(5);
							}}
							className={`text-lg font-medium py-3 px-4 border-l-8 ${
								nav == 5
									? "border-blue-900"
									: "dark:border-slate-800 border-gray-400"
							}`}
						>
							Similars
						</a>
						<a
							href={"#reviews"}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("reviews");
								setNav(6);
							}}
							className={`text-lg font-medium py-3 px-4 border-l-8 ${
								nav == 6
									? "border-blue-900"
									: "dark:border-slate-800 border-gray-400"
							}`}
						>
							Reviews
						</a>
					</aside>
				</div>
				<div className="col-span-4 px-5 space-y-14 font-sans">
					{/* Overview */}
					<div className="space-y-3">
						<h3 id="overview" className="text-xl font-medium">
							# Overview
						</h3>
						<article className="font-light space-y-1">
							<p>
								<span className="font-medium">Title:</span> {detailMovie?.title}
							</p>
							<p>
								<span className="font-medium">Original title:</span>{" "}
								{detailMovie?.original_title}
							</p>
							<p>
								<span className="font-medium">Alternative title:</span>{" "}
								{alternativeTitles
									?.map((item) => `${item.title} (${item.iso_3166_1})`)
									.join(",  ")}{" "}
							</p>
							<p>
								<span className="font-medium">Description:</span>{" "}
								{detailMovie?.overview}
							</p>
							<p>
								<span className="font-medium">Status:</span>{" "}
								{detailMovie?.status}
							</p>
							<p>
								<span className="font-medium">Release date:</span>{" "}
								{detailMovie?.release_date}
							</p>
							<p>
								<span className="font-medium">Runtime:</span>{" "}
								{detailMovie?.runtime}mins
							</p>
							<p>
								<span className="font-medium">Genres:</span>{" "}
								{detailMovie?.genres?.map((genre) => genre.name).join(", ")}{" "}
							</p>
							<p>
								<span className="font-medium">Tagline:</span>{" "}
								{detailMovie?.tagline}
							</p>
							<p>
								<span className="font-medium">Spoken language:</span>{" "}
								{detailMovie?.spoken_languages
									?.map((language) => language.name)
									.join(", ")}{" "}
							</p>
							<p>
								<span className="font-medium">Budget:</span>{" "}
								{detailMovie?.budget?.toLocaleString()}
							</p>
							<p>
								<span className="font-medium">Revenue:</span>{" "}
								{detailMovie?.revenue?.toLocaleString()}
							</p>
							<p>
								<span className="font-medium">Companies:</span>{" "}
								{detailMovie?.production_companies
									?.map((item) => `${item.name} (${item.origin_country})`)
									.join(", ")}{" "}
							</p>
							<fieldset className="border border-gray-500 p-3">
								<legend className="font-medium">Statistics: </legend>
								<p>
									<span className="font-medium">Vote average:</span>{" "}
									{detailMovie?.vote_average}
								</p>
								<p>
									<span className="font-medium">Vote count:</span>{" "}
									{detailMovie?.vote_count} Users
								</p>
								<p>
									<span className="font-medium">Popularity:</span>{" "}
									{detailMovie?.popularity}
								</p>
							</fieldset>
						</article>
					</div>
					{/* Images */}
					<div className="space-y-3">
						<h3 id="images" className="text-xl font-medium">
							# Images
						</h3>
						<div className="flex w-full overflow-x-auto">
							{images?.backdrops?.map((item, index) => (
								<img
									src={"https://image.tmdb.org/t/p/original" + item.file_path}
									key={index}
									className="flex-shrink-0 w-1/3"
								/>
							))}
						</div>
						<div className="flex w-full overflow-x-auto">
							{images?.posters?.map((item, index) => (
								<img
									src={"https://image.tmdb.org/t/p/original" + item.file_path}
									key={index}
									className="flex-shrink-0 w-1/4"
								/>
							))}
						</div>
						<div className="flex w-full overflow-x-auto">
							{images?.logos?.map((item, index) => (
								<img
									src={"https://image.tmdb.org/t/p/original" + item.file_path}
									key={index}
									className="flex-shrink-0 w-1/3"
								/>
							))}
						</div>
					</div>
					{/* Companies */}
					<div className="space-y-3">
						<h3 id="companies" className="text-xl font-medium">
							# Companies
						</h3>
						<div className="flex w-full overflow-x-auto gap-1">
							{detailMovie?.production_companies?.map((item, index) => (
								<div key={index}>
									<img
										src={
											item.logo_path
												? "https://image.tmdb.org/t/p/original" + item.logo_path
												: ""
										}
										className="flex-shrink-0 h-32"
									/>
									<h4 className="text-lg font-medium font-mono">
										{item.name} {`(${item.origin_country})`}
									</h4>
								</div>
							))}
						</div>
					</div>
					{/* Recommendations */}
					<div className="space-y-3">
						<h3 id="recommendations" className="text-xl font-medium">
							# Recommendations
						</h3>
						<div className="flex w-full overflow-x-auto gap-10">
							{recomens?.map((item, index) => (
								<Link to={"/detail/movie/" + item.id} key={index}>
									<Card data={item} />
								</Link>
							))}
						</div>
					</div>
					{/* Similars */}
					<div className="space-y-3">
						<h3 id="similars" className="text-xl font-medium">
							# Similars to {detailMovie?.title}
						</h3>
						<div className="flex w-full overflow-x-auto gap-10">
							{similars?.map((item, index) => (
								<Link to={"/detail/movie/" + item.id} key={index}>
									<Card data={item} />
								</Link>
							))}
						</div>
					</div>
					{/* Reviews */}
					<div className="space-y-3">
						<h3 id="reviews" className="text-xl font-medium">
							# Reviews to {detailMovie?.title}
						</h3>
						<div className="space-y-3">
							{reviews?.map((item, index) => (
								<article
									key={index}
									className="p-6 text-base bg-white rounded-lg dark:bg-gray-900"
								>
									<footer className="flex justify-between items-center mb-2">
										<div className="flex items-center">
											<p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
												<img
													className="mr-2 w-6 h-6 rounded-full"
													src={
														"https://image.tmdb.org/t/p/original" +
														item.author_details.avatar_path
													}
												/>
												{item.author}
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400 mr-2">
												<span>
													{new Date(item.updated_at)
														.toLocaleString("en-US", {
															month: "short",
															day: "numeric",
															year: "numeric",
															hour: "2-digit",
															minute: "2-digit",
														})
														.replace(",", "")}
												</span>
											</p>
										</div>
									</footer>
									<p className="text-gray-500 dark:text-gray-400 line-clamp-4">
										{item.content}
									</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailMovieView.propTypes = {
	detailMovie: PropTypes.object,
	images: PropTypes.object,
	alternativeTitles: PropTypes.array,
	recomens: PropTypes.array,
	similars: PropTypes.array,
	reviews: PropTypes.array,
	addRating: PropTypes.func.isRequired,
};

export default memo(DetailMovieView);
