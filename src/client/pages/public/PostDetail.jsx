import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
	infoBox: {
		'& h1': {
			textAlign: 'center',
		},
		'& h4': {
			textAlign: 'right',
		},
	},
	parallaxOuter: {
		position: 'relative',
		height: '350px',
		overflow: 'hidden',
		'& h1': {
			width: '100%',
			lineHeight: '350px',
			fontWeight: '600',
			color: 'white',
			textShadow: '-2px -2px 10px black',
			textAlign: 'center',
			position: 'absolute',
			top: '0',
		},
	},
}));
const PostDetail = routes => {
	const classes = useStyles();
	const idPosting = routes.route.match.params.idPosting;
	const [data, setData] = useState({});
	const apiUrl = 'http://localhost:3000/_dummy/PostData.json';

	const getPostDetail = () => {
		return Axios.get(apiUrl);
	};
	useEffect(() => {
		getPostDetail().then(res => {
			console.log(res.data.postData[idPosting]);
			setData(res.data.postData[idPosting]);
		});
	}, [idPosting]);

	return (
		<Container component="main" maxWidth="xl">
			<CssBaseline />
			<div>Post{idPosting}</div>
			<div>
				<div className={classes.infoBox}>
					<Typography variant="h4" component="h1">
						{/* 제목*/}
						{data.title}
					</Typography>
					<Typography variant="h6" component="h4">
						{/* 여행지+기간*/}
						{data.area}/{`5일`}
					</Typography>
					<Typography variant="h6" component="h4">
						{/* 날짜*/}
						{data.date}
					</Typography>
				</div>
				<div className={classes.parallaxOuter}>
					{/* 대표사진*/}
					<img
						width="100%"
						src={'http://localhost:3000/' + data.image}
						alt={data.image}
					/>
					<Typography variant="h4" component="h1">
						1일차
					</Typography>
				</div>
				<div>
					<Typography variant="h6" component="h5">
						{`가족과 함께하는 다낭 & 호이안`}
					</Typography>
					<Typography variant="h6" component="h5">
						{/* 콘텐츠*/}
						{data.content}
					</Typography>
					<Typography variant="h6" component="h5">
						{/* 여행시작일*/}
						{`여행시작일: 2019-08-11`}
					</Typography>
					<Typography variant="h6" component="h5">
						{/* 여행인원*/}
						{`1명`}
					</Typography>
					<Typography variant="h6" component="h5">
						{/* 작성일*/}
						{`작성일: 2019-08-20`}
					</Typography>
					<Typography variant="h6" component="h5">
						{/* 마지막수정일*/}
						{`마지막수정일: 2019-08-20`}
					</Typography>
					<Typography variant="h6" component="h5">
						{/* 조회수*/}
						{`조회수: 100`}
					</Typography>
					<Typography variant="h6" component="h5">
						{data.content}
					</Typography>
				</div>
			</div>
		</Container>
	);
};
export default PostDetail;
