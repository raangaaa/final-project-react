import PropTypes from "prop-types";
import Card from "../../components/Card";
import SeeMoreCard from "../../components/SeeMoreCard";
import { memo } from "react";
import "./Home.css";

const HomeView = ({ movie, person, video, randomMovie }) => {
	const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="min-h-screen w-full dark:bg-megenta-300 relative -z-10">
			<div className="h-[530px] relative z-[2]">
				<div className="fixed top-0 left-0 z-[-1]">
					<div className="relative flex overflow-hidden items-center py-14">
						<div className="absolute w-1/6 h-full bg-gradient-to-r from-megenta-300 from-15% via-transparent to-transparent left-1/2"></div>
						{/* Bagian konten kiri */}
						<div className="w-1/2 flex px-16 bg-megenta-300 text-white space-x-7 h-max">
							<div>
								{randomMovie?.poster_path ? (
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
									<div className="skeleton h-64 w-44"></div>
								)}
							</div>

							{randomMovie ? (
								<div className="flex flex-col justify-center">
									<h1 className="text-2xl font-bold mb-4 cursor-pointer">
										{randomMovie?.title}
									</h1>
									<p className="text-md mb-6">⭐ {randomMovie?.vote_average}</p>
									<p className="mb-6 line-clamp-3">{randomMovie?.overview}</p>
									<a className="px-5 py-2 flex items-center space-x-2 cursor-pointer rounded-full w-max bg-red-500 text-white font-semibold hover:bg-red-600">
										<svg
											className="w-[17px] h-[17px] text-gray-800 dark:text-white"
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
									</a>
								</div>
							) : (
								<div className="flex flex-col justify-center gap-5">
									<div className="skeleton h-4 w-28"></div>
									<div className="skeleton h-4 w-60"></div>
									<div className="skeleton h-4 w-60"></div>
								</div>
							)}
						</div>

						{video ? (
							<iframe
								src={video}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								className="w-1/2 h-[400px] object-cover"
								allowFullScreen
							></iframe>
						) : (
							<div className="w-1/2 h-[400px] object-cover"></div>
						)}
						<div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-b from-megenta-300 from-15% via-transparent to-transparent"></div>
						<div className="absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-t from-megenta-300 from-15% via-transparent to-transparent"></div>
					</div>
				</div>
			</div>

			<div className="relative bg-gradient-to-t from-megenta-300 from-90% z-30 space-y-20 pb-20">
				<div className="space-y-5">
					<h3 className="font-bold text-3xl text-white pl-16">
						🎬 Playing Now
					</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{movie && movie.now_playings.length > 0
								? movie?.now_playings?.map((item, index) => (
										<div key={index}>
											<Card data={item} />
										</div>
								  ))
								: loop?.map((item) => (
										<div
											key={item}
											className="skeleton w-44 h-64 flex-shrink-0"
										></div>
								  ))}
							<SeeMoreCard title={"Now Playing"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl text-white pl-16">🔥 Trending</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{movie && movie.trendings.length > 0
								? movie?.trendings?.map((item, index) => (
										<div key={index}>
											<Card data={item} />
										</div>
								  ))
								: loop?.map((item) => (
										<div
											key={item}
											className="skeleton w-44 h-64 flex-shrink-0"
										></div>
								  ))}
							<SeeMoreCard title={"Trending"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl text-white pl-16">
						👤 Popular Person
					</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{person && person.populars.length > 0
								? person?.populars?.map((item, index) => (
										<div key={index} className="avatar">
											<div className="w-32 rounded-full">
												<img
													src={
														"https://image.tmdb.org/t/p/original/" +
														item.profile_path
													}
													alt={item.name}
												/>
											</div>
										</div>
								  ))
								: loop?.map((item) => (
										<div
											key={item}
											className="skeleton w-32 h-32 flex-shrink-0 rounded-full"
										></div>
								  ))}
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl text-white pl-16">🗓️ Upcoming</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{movie && movie.upcomings.length > 0
								? movie?.upcomings?.map((item, index) => (
										<div key={index}>
											<Card data={item} />
										</div>
								  ))
								: loop?.map((item) => (
										<div
											key={item}
											className="skeleton w-44 h-64 flex-shrink-0"
										></div>
								  ))}
							<SeeMoreCard title={"Upcoming"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl text-white pl-16">👤 Popular</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{movie && movie.populars.length > 0
								? movie?.populars?.map((item, index) => (
										<div key={index}>
											<Card data={item} />
										</div>
								  ))
								: loop?.map((item) => (
										<div
											key={item}
											className="skeleton w-44 h-64 flex-shrink-0"
										></div>
								  ))}
							<SeeMoreCard title={"Popular"} />
						</div>
					</div>
				</div>
				<div className="space-y-5">
					<h3 className="font-bold text-3xl text-white pl-16">🌟 Top Rated</h3>
					<div className="w-[91.5%] py-4 overflow-x-auto mx-auto overflow-y-hidden">
						<div className="flex space-x-10">
							{movie && movie.top_rateds.length > 0
								? movie?.top_rateds?.map((item, index) => (
										<div key={index}>
											<Card data={item} />
										</div>
								  ))
								: loop?.map((item) => (
										<div
											key={item}
											className="skeleton w-44 h-64 flex-shrink-0"
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
};

export default memo(HomeView);
