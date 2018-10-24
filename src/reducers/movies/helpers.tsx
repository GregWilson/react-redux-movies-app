import * as _ from 'lodash';

// get selected movie object from movies store state
export function getSelectedMovie(state:any){
    let selectedMovieId = _.get(state, 'selectedMovieId', null);
    let movie = _.find(state.movies, (m:any) => !!(m && m.id && m.id == selectedMovieId));
    return movie || {};
}
