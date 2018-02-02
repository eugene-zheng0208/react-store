
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppComponent from './components/AppComponent';
import Home from './components/Home';

export default (
    <Route path="/" component={AppComponent} >
        <IndexRoute component={Home} />
    </Route>
); 

