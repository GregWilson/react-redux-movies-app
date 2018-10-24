import * as _ from 'lodash';
import * as Immutable from 'seamless-immutable';
import * as ActionTypes from '../../actions/constants';
import {IMovie,} from '../../types/index';

// store state type definition
export interface IStoreState {
    movies: Immutable.Immutable<IMovie|any>;
    selectedMovieId: string;
}

// initial store state
const initialState :IStoreState = Immutable({
    movies: Immutable([]),
    selectedMovieId: null,
});

// reducer
export default function movies(state: IStoreState = initialState, action: any): IStoreState {
    let newState = Immutable(state);
    switch (action.type) {

        case ActionTypes.RECEIVE_MOVIES_DATA:
            return receiveMoviesData(newState, action.data);

        case ActionTypes.SET_SELECTED_MOVIE:
            return setSelectedMovie(newState, action.data);

        default:
            return newState;
    }
}

export type ImmutableStoreState = Immutable.Immutable<IStoreState>;

function receiveMoviesData(state:ImmutableStoreState, actionData:any) :ImmutableStoreState{
    if(_.isArray(actionData)){
        state = state.set('movies', actionData);
    }
    return state;
}

function setSelectedMovie(state:ImmutableStoreState, actionData:any) :ImmutableStoreState{
    if(_.isString(actionData)){
        state = state.set('selectedMovieId', actionData);
    }
    return state;
}
