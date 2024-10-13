import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ExploreGenreView = ({genres}) => {
	return (
		<div
			id="genre"
			className="dark:bg-megenta-300 bg-slate-300 dark:text-white text-gray-800 min-h-screen font-sans space-y-10"
		>
			{/* Breadcrumb */}
			<div className="text-sm pt-28 pl-16">
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
												d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"
											/>
										</svg>
										Genre
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

			{/* Heading */}
			<h1 className="text-4xl font-bold text-center">List of Movie Genres</h1>

			{/* Rendering data genre */}
			<div className="w-[91.5%] mx-auto gap-3">
				{genres?.map((item, index) => (
					<Link
						key={index}
						to={`/explore/movie/genre?genre_id=` + item.id}
						className="btn btn-neutral m-3"
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
};

ExploreGenreView.propTypes = {
    genres: PropTypes.array
}

export default ExploreGenreView;
