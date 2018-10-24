import * as constants from './constants';
let MoviesData = require('./movies.json');

export const receiveMoviesData = (data?:any) => ({
    type: constants.RECEIVE_MOVIES_DATA,
    data: data,
});

export function fetchMovies() {
    return function (dispatch:any, getState?:any){
        dispatch(receiveMoviesData(MoviesData));
    }
}

export const setSelectedMovie = (movieId:string) => ({
    type: constants.SET_SELECTED_MOVIE,
    data: movieId,
});
