import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import peopleReducer from "./reducers/peopleReducer";
import themeReducer from "./reducers/themeReducer";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		movie: movieReducer,
		people: peopleReducer,
	},
});

export default store;
