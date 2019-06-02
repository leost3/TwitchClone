import React from 'react';
import { Router, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history'

// Client ID: 384348642975-h112f00klhp83etj26h11koea761c0bt.apps.googleusercontent.com

const App = () => {
    return (
        <div className="ui component">
            <Router history={history}>
                <div>
                   <Header />
                   <Route path='/' exact component={StreamList} />
                   <Route path='/stream/new' exact component={StreamCreate} />
                   <Route path='/stream/edit' exact component={StreamEdit} />
                   <Route path='/stream/delete' exact component={StreamDelete} />
                   <Route path='/stream/show' exact component={StreamShow} />
                </div>
            </Router>
        </div>

    ) 
};

export default App;