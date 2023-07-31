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
	// console.log(genres);
	return genres;
});

const arrayOfMoviesData = (array, moviesArray, genres) => {
	array.forEach((movie) => {
		const moviesGenres = [];
		movie.genre_ids.forEach((genre) => {
			const name = genres.find(({ id }) => id === genre);
			if (name) moviesGenres.push(name.name);
		});
		if (movie.backdrop_path)
			moviesArray.push({
				id: movie.id,
				name: movie?.original_name
					? movie.original_name
					: movie.original_title,
				image: movie.backdrop_path,
				genres: moviesGenres.slice(0, 4),
			});
	});
};

// const CinemaSurfSlice = createSlice({
// 	name: "CinemaSurf",
// 	initialState,
// 	extraReducers: (builder) => {
// 		builder.addCase(getGenres.fulfilled, (state, action) => {
// 			state.genres = action.payload;
// 			state.generesLoaded = true;
// 		});
// 	},
// });

const getMovieData = async (api, genres, paging = false) => {
	const moviesArray = [];
	for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
		const {
			data: { results },
		} = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
		arrayOfMoviesData(results, moviesArray, genres);
	}
	return moviesArray;
};

export const fetchMovies = createAsyncThunk(
	"cinemaSurf/trending",
	async ({ type }, myThunk) => {
		const {
			cinemaSurf: { genres },
		} = myThunk.getState();
		return getMovieData(
			`${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
			genres,
			true
		);
		// console.log(data);
	}
);

const CinemaSurfSlice = createSlice({
	name: "CinemaSurf",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getGenres.fulfilled, (state, action) => {
			state.genres = action.payload;
			state.generesLoaded = true;
		});
		builder.addCase(fetchMovies.fulfilled, (state, action) => {
			state.movies = action.payload;
		});
	},
});

export const store = configureStore({
	reducer: {
		cinemaSurf: CinemaSurfSlice.reducer,
	},
});
