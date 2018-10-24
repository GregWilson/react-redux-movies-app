import * as React from 'react';
import * as Cx from 'classnames';
import { IMovie, IMovies, } from '../../types/index';

export interface Props {
    movies: IMovies;
    setSelectedMovie?: (movieId:string) => void;
    selectedMovie?: IMovie;
}

export default function MovieList(props:Props) {
    let { movies, setSelectedMovie, selectedMovie, } = props;
    return (
        <div className='list-group'>
            {movies.map((movie:IMovie, idx:number) => {
                let isSelected :boolean = (selectedMovie && selectedMovie.id && selectedMovie.id == movie.id);
                let classes = Cx({'list-group-item': true, 'list-group-item-action': true, 'active': isSelected});
                return (
                    <a key={movie.id}
                       href='#'
                       id={movie.id}
                       className={classes}
                       onClick={(evt:any) => {evt && evt.preventDefault(); setSelectedMovie(movie.id);}}>
                        {movie.title}
                    </a>
                );
            })}
        </div>
    );
}

