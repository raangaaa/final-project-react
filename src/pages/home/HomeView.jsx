import PropTypes from "prop-types";
import Card from "../../components/Card";
import SeeMoreCard from "../../components/SeeMoreCard";
import { memo, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const HomeView = ({ movie, person, video, randomMovie, isLoading }) => {
	useEffect(() => {
		const open = (sectionId) => {
			const section = document.getElementById(sectionId);
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		};
		open("home");
	}, []);

	return (
		<div
			id="home"
			className="min-h-screen w-full dark:bg-megenta-300 bg-slate-300 relative -z-10"
		>
			{/* Hero section */}
			<div className="h-[530px] relative z-[2] ">
				<div className="fixed top-0 left-0 z-[-1] dark:bg-megenta-300 bg-slate-300">
					<div className="relative flex overflow-hidden items-center py-14">
						<div className="absolute w-1/6 h-full bg-gradient-to-r dark:from-megenta-300 from-slate-300 from-10% via-transparent to-transparent left-1/2"></div>
						{/* Bagian konten kiri */}
						<div className="w-1/2 flex px-16 dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 space-x-7 h-max">
							<div>
								{randomMovie?.poster_path && !isLoading ? (
									<div className="w-44 overflow-hidden rounded-lg shadow-lg transform">
										{/* Poster film */}
										<img
											src={
												"https://image.tmdb.org/t/p/original" +
												randomMovie?.poster_path
											}
											className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
										/>
									</div>
								) : (
									<div className="skeleton h-64 w-44 dark:bg-gray-950 bg-gray-500"></div>
								)}
							</div>

							{randomMovie && !isLoading ? (
								<div className="flex flex-col justify-center">
									<h1 className="text-2xl font-bold mb-4 cursor-pointer">
										{randomMovie?.title}
									</h1>
									<p className="text-md mb-6">⭐ {randomMovie?.vote_average}</p>
									<p className="mb-6 line-clamp-3">{randomMovie?.overview}</p>
									<Link
										to={"/detail/movie/" + randomMovie?.id}
										className="px-5 py-2 flex items-center space-x-2 cursor-pointer rounded-full w-max bg-red-500 text-white font-semibold hover:bg-red-600"
									>
										<svg
											className="w-[17px] h-[17px] text-white"
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
												d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
											/>
										</svg>

										<span>See detail</span>
									</Link>
								</div>
							) : (
								<div className="flex flex-col gap-5">
									<div className="skeleton h-4 w-28 dark:bg-gray-950 bg-gray-500"></div>
									<div className="skeleton h-4 w-60 dark:bg-gray-950 bg-gray-500"></div>
									<div className="skeleton h-4 w-60 dark:bg-gray-950 bg-gray-500"></div>
								</div>
							)}
						</div>

						{video && !isLoading ? (
							<iframe
								src={video}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								className="w-1/2 h-[500px] object-cover"
								allowFullScreen
							></iframe>
						) : (
							<div className="w-1/2 h-[400px] object-cover"></div>
						)}
						<div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-b dark:from-megenta-300 from-slate-300 from-10% via-transparent to-transparent"></div>
						<div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-t dark:from-megenta-300 from-slate-300 from-10% via-transparent to-transparent"></div>
						<div className="absolute top-0 left-1/2 w-full h-full dark:bg-transparent bg-slate-300 opacity-40"></div>
					</div>
				</div>
			</div>

			{/* List Movie */}
			<div className="relative bg-gradient-to-t dark:from-megenta-300 from-slate-300 from-90% z-30 space-y-20 pb-20 dark:text-white text-gray-800">
				<div className="space-y-5">
					<h3 className="font-bold text-3xl pl-16">🎬 Playing Now</h3>
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
							<SeeMoreCard title={"Now Playing"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl pl-16">🔥 Trending</h3>
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
							<SeeMoreCard title={"Trending"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl pl-16">👤 Popular Person</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{person && person.populars.length > 0 && !isLoading
								? person?.populars?.map((item, index) => (
										<Link
											to={"/detail/person/" + item.id}
											key={index}
											className="avatar"
										>
											<div className="w-32 rounded-full">
												<img
													src={
														"https://image.tmdb.org/t/p/original/" +
														item.profile_path
													}
													alt={item.name}
												/>
											</div>
										</Link>
								  ))
								: Array.from({ length: 20 }, (_, index) => (
										<div
											key={index}
											className="flex flex-col gap-2 justify-center items-center"
										>
											<div className="skeleton h-32 w-32 shrink-0 rounded-full dark:bg-gray-950 bg-gray-500"></div>
											<div className="skeleton h-4 w-28 dark:bg-gray-950 bg-gray-500"></div>
										</div>
								  ))}
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl pl-16">🗓️ Upcoming</h3>
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
							<SeeMoreCard title={"Upcoming"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl pl-16">🚀 Popular</h3>
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
							<SeeMoreCard title={"Popular"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl pl-16">🌟 Top Rated</h3>
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
							<SeeMoreCard title={"Top Rated"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HomeView.propTypes = {
	movie: PropTypes.object,
	person: PropTypes.object,
	video: PropTypes.string,
	randomMovie: PropTypes.object,
	isLoading: PropTypes.bool,
};

export default memo(HomeView);
