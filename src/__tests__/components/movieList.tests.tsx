import * as React from "react";
import { HTMLAttributes, shallow, ShallowWrapper, configure, } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import * as Sinon from 'sinon';
const MoviesData = require('../../actions/movies.json');
import MovieList from '../../components/movieList/index';

configure({
    adapter: new Adapter()
});

it('correctly calls setSelectedMovie callback on MovieList component', () => {
    let selectedMovie = MoviesData[0];
    const onClickSpy = Sinon.spy();
    const wrapper = shallow(
        <MovieList movies={MoviesData} setSelectedMovie={onClickSpy} selectedMovie={selectedMovie} />
    );
    wrapper.find(`#${selectedMovie.id}`).simulate('click');
    expect(onClickSpy).toHaveProperty('callCount', 1);
    expect(onClickSpy.getCall(0).args[0]).toEqual(selectedMovie.id);
});
