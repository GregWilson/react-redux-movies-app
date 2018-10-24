import * as React from 'react';
import * as actions from '../../actions';
import { connect, Dispatch } from 'react-redux';
import { getSelectedMovie, } from '../../reducers/movies/helpers';
import MovieList from '../../components/movieList';
import MovieDetails from '../../components/movieDetails';

export interface Props {
    movies?:any;
    fetchMovies?: () => void;
    setSelectedMovie?: (movieId:string) => void;
}

class Movies extends React.Component<Props, any>{

    constructor(props:any){
        super(props);
    }

    componentDidMount(){
        this.props.fetchMovies();
    }

    render(){
        let movies = this.props.movies.movies || [];
        let selectedMovie = getSelectedMovie(this.props.movies);
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-4">
                        <MovieList movies={movies}
                                   selectedMovie={selectedMovie}
                                   setSelectedMovie={this.props.setSelectedMovie} />
                    </div>
                    <div className="col-sm-8">
                        <MovieDetails movie={selectedMovie} />
                    </div>
                </div>
            </div>
        );
    }
}

export function mapStateToProps(storeState: any) {
    return {
        movies: storeState.movies,
    };
}

export function mapDispatchToProps() {
    return {
        fetchMovies: actions.fetchMovies,
        setSelectedMovie: actions.setSelectedMovie,
    };
}

export {Movies};
export default connect(mapStateToProps, mapDispatchToProps())(Movies);
