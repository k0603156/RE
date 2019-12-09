import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import _ from 'lodash';

import PrivateLayout from './private';
import PublicLayout from './public';

import { PrivateRoutes, PublicRoutes, SessionRoutes } from './routes';

import Login from '../pages/session/Login';
import NotFound from './public/NotFound';

import { UserActions } from '../user/UserActions';

const resetStyles = theme => ({
	'@global': theme.global,
});
class Template extends Component {
	constructor(props) {
		super(props);
		this.userActions = new UserActions(this.props.dispatch);
	}
	componentWillMount() {
		this.userActions.verify();
	}
	render() {
		const user = this.props.user;
		if (!user.verified) {
			return <div>Loading...</div>;
		}
		return (
			<BrowserRouter>
				<Switch>
					{_.map(PublicRoutes, (route, key) => {
						const { component, path } = route;
						return (
							<Route
								exact
								path={path}
								key={key}
								render={route =>
									user.logged ? (
										<PrivateLayout
											component={component}
											route={route}
											user={user}
											userActions={this.userActions}
										/>
									) : (
										<PublicLayout
											component={component}
											route={route}
											user={user}
										/>
									)
								}
							/>
						);
					})}

					{_.map(PrivateRoutes, (route, key) => {
						const { component, path } = route;
						return (
							<Route
								exact
								path={path}
								key={key}
								render={route =>
									user.logged ? (
										<PrivateLayout
											component={component}
											route={route}
											user={user}
											userActions={this.userActions}
										/>
									) : (
										<PublicLayout component={Login} route={route} user={user} />
									)
								}
							/>
						);
					})}

					{_.map(SessionRoutes, (route, key) => {
						const { component, path } = route;
						return (
							<Route
								exact
								path={path}
								key={key}
								render={route =>
									user.logged ? (
										<Redirect to="/" />
									) : (
										<PublicLayout
											component={component}
											route={route}
											user={user}
										/>
									)
								}
							/>
						);
					})}
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state, props) {
	return { user: state };
}
function mapDispatchToProps(dispatch) {
	return { dispatch };
}

export default withStyles(resetStyles)(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Template),
);
