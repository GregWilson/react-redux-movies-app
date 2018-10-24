import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import Navbar from './components/navbar';

export interface Props {
    children?: any;
}

function App(props: Props) {
    let childComponent = (props && props.children) ? React.cloneElement(props.children, props) : null;
    return (
        <div className="app_container" id='app_container'>
            <Navbar />
            <div className="app_content container-fluid">
                {childComponent}
            </div>
        </div>
    );
}

export function mapStateToProps(storeState: any) { return {}; }
export function mapDispatchToProps() { return {}; }
export default connect(mapStateToProps, mapDispatchToProps())(App);
