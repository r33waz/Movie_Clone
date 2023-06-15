import { movieInterface } from "@/interface/global";
import { createSlice } from "@reduxjs/toolkit";

const initialState: movieInterface = {
    movie: [],
    mainMovie:[]
}

const MovieSlice:any = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, data) => {
            state.movie=data.payload
        }
    }
})
export const {setMovies} =MovieSlice.actions
export default MovieSlice.reducer


