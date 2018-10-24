import * as React from 'react';
import { IMovie, } from '../../types/index';

export interface Props {
    movie: IMovie;
}

export default function MovieDetails(props:Props) {
    let { movie, } = props;
    return (
        <div className='movie-details-container'>
            {movie && movie.actors ? (
                <div>
                    <img src={movie.thumbnail} />
                    <p>
                        <strong>Director: </strong>
                        {movie.director}
                    </p>
                    <p>
                        <strong>Stars: </strong>
                        {movie.actors.join('  |  ')}
                    </p>
                    <p className='description'>
                        {movie.description}
                    </p>
                </div>
            ) : null}
        </div>
    );
}
