import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Grid } from '@material-ui/core';
import PostCard from 'components/postCard';
import { withStyles } from '@material-ui/core/styles';
import LandingImg from 'media/landing_back.jpg';
import Axios from 'axios';

const styles = theme => ({
	'@global': {
		body: {
			backgroundImage: 'url(' + LandingImg + ')',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		},
	},
	card: {
		'&:hover': {
			transform: 'translate(0, -10px)',
			transitionDuration: '.5s',
		},
	},
	sdd: { margin: theme.ht },
});

class Home extends Component {
	state = {
		postList: [],
	};
	grid = {
		spacing: 1,
		xs: 12,
		sm: 6,
		md: 4,
		lg: 3,
	};
	getPostList() {
		const apiUrl = '_dummy/PostData.json';
		Axios.get(apiUrl).then(res => {
			this.setState({ postList: res.data.postData });
		});
	}
	componentDidMount() {
		this.getPostList();
	}

	render() {
		const postList = this.state.postList;
		return (
			<Container component="main" maxWidth="xl">
				<Typography className={this.props.classes.title}>
					Lorem ipsum
				</Typography>
				<div className={this.props.classes.sdd}> 신간 여행기 </div>
				<hr />
				<Grid container spacing={this.grid.spacing}>
					{postList.map((value, i) => {
						return (
							<Grid
								className={this.props.classes.card}
								item
								key={value.id}
								xs={this.grid.xs}
								sm={this.grid.sm}
								md={this.grid.md}
								lg={this.grid.lg}
							>
								<Link to={`/postdetail/${value.id}`}>
									<PostCard postData={value} />
								</Link>
							</Grid>
						);
					})}
				</Grid>
				<div> 베스트 여행기 </div>
				<hr />
				<Grid container spacing={this.grid.spacing}>
					{postList.map((value, i) => {
						return (
							<Grid
								className={this.props.classes.card}
								item
								key={value.id}
								xs={this.grid.xs}
								sm={this.grid.sm}
								md={this.grid.md}
								lg={this.grid.lg}
							>
								<Link to={`/postdetail/${value.id}`}>
									<PostCard postData={value} />
								</Link>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		);
	}
}
export default withStyles(styles)(Home);
