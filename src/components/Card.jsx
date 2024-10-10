import PropTypes from "prop-types";

const Card = ({ data }) => {
	return (
		<div className="relative cursor-pointer w-44 h-66 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
			{/* Poster film */}
			<img
				src={"https://image.tmdb.org/t/p/original/" + data.poster_path}
				className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
			/>

			{/* Overlay judul */}
			<div className="absolute p-3 inset-0 flex flex-col gap-1 justify-end bg-black bg-opacity-0 group hover:bg-opacity-70 transition-opacity duration-300">
				<h3 className="text-base font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					{data.title}
				</h3>
				<p className="text-xs font-normal text-white line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					{data.overview}
				</p>
				<div className="flex text-xs font-medium justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="flex flex-col gap-1">
						<span>⭐ {data.vote_average}</span>
						<span>👤 {data.popularity}</span>
					</div>
					<div className="flex gap-2">
						<button className="text-base" title="Add to Favorite">
							❤️
						</button>
						<button className="text-base" title="Add to Watch List">
							👁️‍🗨️
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object,
};

export default Card;
