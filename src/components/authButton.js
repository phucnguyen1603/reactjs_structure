import React from 'react';
import { fakeAuth } from "../services/fakeAuth"
import { withRouter } from 'react-router-dom';

export const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
            }}>Sign out</button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        )
))