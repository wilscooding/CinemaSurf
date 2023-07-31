import {
	configureStore,
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";

const initialState = {
	movies: [],
	generesLoaded: false,
	genres: [],
};

export const getGenres = createAsyncThunk("cinemaSurf/genres", async () => {
	const {
		data: { genres },
	} = await axios.get(
		`${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
	);
	console.log(genres);
	return genres;
});

const CinemaSurfSlice = createSlice({
	name: "CinemaSurf",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getGenres.fulfilled, (state, action) => {
			state.genres = action.payload;
			state.generesLoaded = true;
		});
	},
});

export const store = configureStore({
	reducer: {
		cinemaSurf: CinemaSurfSlice.reducer,
	},
});
