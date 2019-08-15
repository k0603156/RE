import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles  } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, Typography, Button } from "@material-ui/core";
import Title from 'components/title';

const styles = (theme => ({
    appBar: theme.appBarStyle,
    title: {
        flexGrow: 1,
    }
}));

class PublicLayout extends Component {

    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user  = this.props.user;
        return (
        <>
            <div className={this.props.classes.root}>
            <CssBaseline>
                <AppBar className={this.props.classes.appBar} position="static">
                    <Toolbar>
                    <Typography
                    variant = "h6"
                    className = {
                        this.props.classes.title
                    }>
                        <Title to='/' name="traveller" width="210px" height="35px"/>
                    </Typography>
                        { user.logged ? (
                            <Button color="inherit">
                                <Link to='/main'>into</Link>
                            </Button>
                        ):(
                            <Button color="inherit">
                                <Link to='/login'>로그인</Link>
                            </Button>
                        )
                        }
                    </Toolbar>
                </AppBar>
                <Component route={route}/>
                </CssBaseline>
            </div>
              </>
        );
    }
}
export default withStyles(styles)(PublicLayout);