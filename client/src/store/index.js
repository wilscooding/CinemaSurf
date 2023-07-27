import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
  movies: [],
  generesLoaded: false,
  genres: []
}

const CinemaSurfSlice = createSlice({
  name: "CinemaSurf",
  initialState,
  extraReducers: (builder)=>{}
})

export const store = configureStore({
  reducer: {
    cinemaSurf: CinemaSurfSlice.reducer
  }
})
