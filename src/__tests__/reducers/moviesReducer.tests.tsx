import * as React from "react";
import { HTMLAttributes, shallow, ShallowWrapper, configure, } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';

import movies from '../../reducers/movies/index';
import { IStoreState, } from '../../reducers/movies/index';
import { getSelectedMovie, } from '../../reducers/movies/helpers';
import * as Actions from '../../actions/index';
const MoviesData = require('../../actions/movies.json');

configure({
    adapter: new Adapter()
});

let storeState :IStoreState = null;

it("correctly sets initial state", () => {
    storeState = movies(undefined, {type:null,data:null});
    expect(storeState).toHaveProperty('movies', []);
    expect(storeState).toHaveProperty('selectedMovieId', null);
});


it("correctly handles action (RECEIVE_MOVIES_DATA)", () => {
    let action = Actions.receiveMoviesData(MoviesData);
    storeState = movies(storeState, action);
    expect(storeState.movies).toEqual(expect.arrayContaining(MoviesData));
    expect(storeState.movies).toHaveLength(3);
});


it("correctly handles action (SET_SELECTED_MOVIE)", () => {
    let selectedMovieId = MoviesData[0].id;
    let action = Actions.setSelectedMovie(selectedMovieId);
    storeState = movies(storeState, action);
    expect(storeState.selectedMovieId).toEqual(selectedMovieId);
});


it("helper function correctly gets selected movie", () => {
    let selectedMovieId = MoviesData[0].id;
    let selectedMovie :any = getSelectedMovie(storeState);
    expect(selectedMovie).toHaveProperty('id');
    expect(selectedMovie).toHaveProperty('title');
    expect(selectedMovie).toHaveProperty('description');
    expect(selectedMovie).toHaveProperty('director');
    expect(selectedMovie).toHaveProperty('actors');
    expect(selectedMovie).toHaveProperty('thumbnail');
    expect(selectedMovie.id).toEqual(selectedMovieId);
});
