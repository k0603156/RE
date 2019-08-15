import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserActions } from './UserActions';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {
    withStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// class Login extends Component {

//     constructor(props) {
//         super(props);
//         this.action = new UserActions(this.props.dispatch);
//      }
//     render() {
//         return(
//             <div>
//                 <button onClick={() => { this.action.login() }}>
//                     Click here to Login
//                 </button>
//             </div>
//         );
//     }

// }
const styles = (theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));
function ContactDev() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        <Link
          color="inherit"
          href="https://material-ui.com/"
        >
          개발자
        </Link>
        {"에게 궁금하신 것이 있나요?"}
      </Typography>
    );
}

class Login extends Component {
  // constructor(props) {
  //     super(props);
  //     this.action = new UserActions(this.props.dispatch);
  // }
  action = new UserActions(this.props.dispatch);

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.classes.paper}>
          <form className={this.props.classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.props.classes.submit}
            onClick={() => {
                this.action.login();
            }}
            >
              로그인
            </Button>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="로그인 상태 유지"
            />
            <Grid container align="center">
                <Grid item xs>
                    <Link href="#" variant="body2">
                        {"아이디 찾기"}
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    {"비밀번호 찾기"}
                    </Link>
                </Grid>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    {"회원가입"}
                    </Link>
                </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <ContactDev/>
        </Box>
      </Container>
    );
  }
} 
function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  
withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));