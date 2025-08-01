import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
    selectedMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) =>{
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) =>{
      state.upcomingMovies = action.payload;
    },
    addSelectedMovie: (state, action) =>{
      state.selectedMovie = action.payload;
    },
  }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addSelectedMovie} = moviesSlice.actions;
export default moviesSlice.reducer;