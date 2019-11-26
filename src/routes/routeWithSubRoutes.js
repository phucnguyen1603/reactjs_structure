import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';

export class RouteWithSubRoutes extends Component {
    render() {
        if (this.props.private) {
            return <PrivateRoute
                path={this.props.path}
                component={this.props.component}
            />
        }
        return (
            <Route
                path={this.props.path}
                render={props => (
                    // pass the sub-routes down to keep nesting
                    <this.props.component {...this.props} routes={this.props.routes} />
                )}
            />
        )
    }
}

export default RouteWithSubRoutes
