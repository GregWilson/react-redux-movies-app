import { combineReducers } from 'redux';
import movies from './movies/index';

const reducers = combineReducers<any>({
    movies,
});

export default reducers;
