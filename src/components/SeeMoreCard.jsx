import PropTypes from "prop-types";
import { memo } from "react";

const SeeMoreCard = ({ title }) => {
	return (
		<div className="relative w-44 h-66 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-t from-slate-900 to-slate-600 flex justify-center items-center opacity-75 flex-col">
			<span className="text-base font-semibold text-slate-200">
				See More ...
			</span>
			<span className="text-base font-semibold text-slate-200">{title}</span>
		</div>
	);
};

SeeMoreCard.propTypes = {
	title: PropTypes.string.isRequired,
};

export default memo(SeeMoreCard);
