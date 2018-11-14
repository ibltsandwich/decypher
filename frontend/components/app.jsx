import React from 'react';
import LoginForm from './sessions/login_form_container';
import SignupForm from './sessions/signup_form_container';
import HomeIndex from './home/home_index_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <h1>Decypher</h1>
            <Route exact path="/" component={HomeIndex} />
            <AuthRoute path="/login" component={LoginForm} />
            <AuthRoute path="/signup" component={SignupForm} />
        </div>
    )
}

export default App;