import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SeeMoreCard from "../../components/SeeMoreCard";
import Card from "../../components/Card";

const ExploreView = ({ movie, isLoading, search, searchMovie }) => {
	return (
		<div
			id="explore"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen font-sans space-y-10 py-28"
		>
			{/* Breadcrumb */}
			<div className="text-sm pl-16">
				<nav className="flex justify-between" aria-label="Breadcrumb">
					<ol className="inline-flex items-center mb-3 sm:mb-0">
						<li>
							<div className="flex items-center">
								<button className="btn inline-flex items-center px-3 py-1 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white">
									<svg
										className="w-4 h-4 me-1 text-gray-800 dark:text-white"
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
											strokeWidth="2"
											d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
										/>
									</svg>
									Explore
								</button>
							</div>
						</li>
						<span className="mx-2 text-gray-400">/</span>
						<li aria-current="page">
							<div className="flex items-center">
								<div className="dropdown dropdown-bottom">
									<div
										tabIndex={0}
										role="button"
										className="btn items-center py-1 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									>
										<svg
											className="w-4 h-4 me-1 text-gray-800 dark:text-white"
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
												d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"
											/>
										</svg>
										Movie
										<svg
											className="w-4 h-4 text-gray-800 dark:text-white"
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
												d="m19 9-7 7-7-7"
											/>
										</svg>
									</div>
									<ul
										tabIndex={0}
										className="dropdown-content menu border border-black rounded-lg z-[1] p-1 shadow"
									>
										<li>
											<Link to={"/explore"}>
												<svg
													className="w-4 h-4 me-1 text-gray-800 dark:text-white"
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
														d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm0 0-4 4m5 0H4m1 0 4-4m1 4 4-4m-4 7v6l4-3-4-3Z"
													/>
												</svg>
												Movie
											</Link>
										</li>
										<li>
											<Link to={"/explore?tab=genre"}>
												<svg
													className="w-4 h-4 me-1 text-gray-800 dark:text-white"
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
														d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"
													/>
												</svg>
												Genre
											</Link>
										</li>
										<li>
											<Link to={"/explore?tab=person"}>
												<svg
													className="w-4 h-4 me-1 text-gray-800 dark:text-white"
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
														d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
													/>
												</svg>
												Person
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ol>
				</nav>
			</div>

			{/* Search & Heading */}
			<div className="flex flex-col gap-5 items-center">
				<h1 className="text-4xl font-bold">Search for Movie</h1>
				<label className="input w-1/2 input-bordered flex items-center gap-2">
					<input
						type="text"
						className="grow"
						placeholder="Search"
						autoFocus
						onChange={(i) => searchMovie(i.target.value)}
						value={search}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-4 w-4 opacity-70 text-gray-400"
					>
						<path
							fillRule="evenodd"
							d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
							clipRule="evenodd"
						/>
					</svg>
				</label>
			</div>

			{/* Rendering data movie */}

			{!search ? (
				<div className="bg-gradient-to-t dark:from-megenta-300 from-slate-300 from-90% z-30 space-y-20 dark:text-white text-gray-800">
					<div className="space-y-5">
						<Link
							to={"/explore/movie/playingnow"}
							className="font-bold text-3xl pl-16 flex gap-4"
						>
							🎬
							<h3 className="font-bold text-3xl hover:underline">
								Playing Now
							</h3>
						</Link>
						<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
							<div className="flex space-x-10">
								{movie && movie.now_playings.length > 0 && !isLoading
									? movie?.now_playings?.map((item, index) => (
											<Link to={"/detail/movie/" + item.id} key={index}>
												<Card data={item} />
											</Link>
									  ))
									: Array.from({ length: 20 }, (_, index) => (
											<div
												key={index}
												className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
											></div>
									  ))}
								<Link to={"/explore/movie/playingnow"}>
									<SeeMoreCard title={"Now Playing"} />
								</Link>
							</div>
						</div>
					</div>
					<div className="space-y-5">
						<Link
							to={"/explore/movie/trending"}
							className="font-bold text-3xl pl-16 flex gap-4"
						>
							🔥
							<h3 className="font-bold text-3xl hover:underline">Trending</h3>
						</Link>
						<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
							<div className="flex space-x-10">
								{movie && movie.trendings.length > 0 && !isLoading
									? movie?.trendings?.map((item, index) => (
											<Link to={"/detail/movie/" + item.id} key={index}>
												<Card data={item} />
											</Link>
									  ))
									: Array.from({ length: 20 }, (_, index) => (
											<div
												key={index}
												className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
											></div>
									  ))}
								<Link to={"/explore/movie/trending"}>
									<SeeMoreCard title={"Trending"} />
								</Link>
							</div>
						</div>
					</div>
					<div className="space-y-5">
						<Link
							to={"/explore/movie/upcoming"}
							className="font-bold text-3xl pl-16 flex gap-4"
						>
							🗓️
							<h3 className="font-bold text-3xl hover:underline">Upcoming</h3>
						</Link>
						<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
							<div className="flex space-x-10">
								{movie && movie.upcomings.length > 0 && !isLoading
									? movie?.upcomings?.map((item, index) => (
											<Link to={"/detail/movie/" + item.id} key={index}>
												<Card data={item} />
											</Link>
									  ))
									: Array.from({ length: 20 }, (_, index) => (
											<div
												key={index}
												className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
											></div>
									  ))}
								<Link to={"/explore/movie/upcoming"}>
									<SeeMoreCard title={"Upcoming"} />
								</Link>
							</div>
						</div>
					</div>
					<div className="space-y-5">
						<Link
							to={"/explore/movie/popular"}
							className="font-bold text-3xl pl-16 flex gap-4"
						>
							🚀
							<h3 className="font-bold text-3xl hover:underline">Popular</h3>
						</Link>
						<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
							<div className="flex space-x-10">
								{movie && movie.populars.length > 0 && !isLoading
									? movie?.populars?.map((item, index) => (
											<Link to={"/detail/movie/" + item.id} key={index}>
												<Card data={item} />
											</Link>
									  ))
									: Array.from({ length: 20 }, (_, index) => (
											<div
												key={index}
												className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
											></div>
									  ))}
								<Link to={"/explore/movie/popular"}>
									<SeeMoreCard title={"Popular"} />
								</Link>
							</div>
						</div>
					</div>
					<div className="space-y-5">
						<Link
							to={"/explore/movie/toprated"}
							className="font-bold text-3xl pl-16 flex gap-4"
						>
							🌟
							<h3 className="font-bold text-3xl hover:underline">Top Rated</h3>
						</Link>
						<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
							<div className="flex space-x-10">
								{movie && movie.top_rateds.length > 0 && !isLoading
									? movie?.top_rateds?.map((item, index) => (
											<Link to={"/detail/movie/" + item.id} key={index}>
												<Card data={item} />
											</Link>
									  ))
									: Array.from({ length: 20 }, (_, index) => (
											<div
												key={index}
												className="skeleton h-64 w-44 shrink-0 rounded-lg dark:bg-gray-950 bg-gray-500"
											></div>
									  ))}
								<Link to={"/explore/movie/toprated"}>
									<SeeMoreCard title={"Top Rated"} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className="w-[91.5%] grid grid-cols-5 mx-auto gap-4">
						{movie?.searchs?.results?.map((item, index) => (
							<div
								key={index}
								className="flex flex-col justify-center items-center"
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
								to={`/explore?search=${search}&page=${
									movie?.searchs?.page === 1
										? movie?.searchs?.page
										: movie?.searchs?.page - 1
								}`}
								className="join-item btn"
							>
								«
							</Link>
							<button className="join-item btn">
								Page {movie?.searchs?.page}
							</button>
							<Link
								to={`/explore?search=${search}&page=${
									movie?.searchs?.page < movie?.searchs?.total_pages
										? movie?.searchs?.page + 1
										: movie?.searchs?.page
								}`}
								className="join-item btn"
							>
								»
							</Link>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

ExploreView.propTypes = {
	movie: PropTypes.object,
	isLoading: PropTypes.bool,
	search: PropTypes.string,
	searchMovie: PropTypes.func.isRequired,
};

export default ExploreView;
