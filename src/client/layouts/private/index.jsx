import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from 'components/title';
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Button,
  Typography,
  withStyles,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from '@material-ui/icons/Mail';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    body: {
      // overflow: 'auto !important',
    }
  },
  appBar: {
    background: "rgba(255,255,255,0.3)",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menuIcon: {
    fill: "#000"
  },
  title: {
    flexGrow: 1
  },
  greeting: {
    fontSize: "1.1rem",
    verticalAlign: "middle",
    color: "#000"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  userButton: {},
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    margin: "0 8px 0 0 !important",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    }
  },
  searchIcon: {
    color: "black",
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "black",
    [theme.breakpoints.up("sm")]: {
      width: 0,
      "&:focus": {
        borderBottom: "1px solid black",
        width: 200
      }
    }
  }
});

class PrivateLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            drawer: false
        };
    }
    // [anchorEl, setAnchorEL] = React.useState(null);
    listA = ['Inbox', 'Starred', 'Send email', 'Drafts']
    listB = ['All mail', 'Trash', 'Spam']

    handleClick = (e) => {
        this.setState({
            anchorEl: e.target
        });
        // setAnchorEL(event.currentTarget);
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
        // setAnchorEL(null);
    }

    fullList = side => (
        <div
        className={this.props.classes.fullList}
        role="presentation"
        onClick={this.toggleDrawer(side, false)}
        onKeyDown={this.toggleDrawer(side, false)}
        >
            <List>
                {this.listA.map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
                <Divider/>
            <List>
                {this.listB.map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );
    

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  sideList = side => (
    <div
      className={this.props.classes.list}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user = this.props.user;
        const userActions = this.props.userActions;
        return (
          <>
            <CssBaseline />
            <AppBar
              className={this.props.classes.appBar}
              position="static"
            >
              <Toolbar>
                <IconButton
                  onClick={this.toggleDrawer("drawer", true)}
                  edge="start"
                  className={this.props.classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon className={this.props.classes.menuIcon} />
                </IconButton>
                <Typography
                  variant="h6"
                  className={this.props.classes.title}
                >
                  <Title
                    to="/"
                    name="traveller"
                    width="210px"
                    height="35px"
                  />
                </Typography>
                        <div className={this.props.classes.search}>
                            <div className={this.props.classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                // placeholder="Search…"
                                classes={{
                                    root: this.props.classes.inputRoot,
                                    input: this.props.classes.inputInput
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                <div>
                  <span className={this.props.classes.greeting}>
                    Hello
                  </span>
                  <Button
                    className={this.props.classes.userButton}
                    aria-controls="user-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    {user.name}
                  </Button>
                  <Menu
                    id="user-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    <Link to="/main">
                      <MenuItem onClick={this.handleClose}>
                        into
                      </MenuItem>
                    </Link>
                    <Link to="/user/profile">
                      <MenuItem onClick={this.handleClose}>
                        Profile
                      </MenuItem>
                    </Link>
                    <Link to="/user/posts">
                      <MenuItem onClick={this.handleClose}>
                        My Posts
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        userActions.logout();
                      }}
                    >
                      로그아웃
                    </MenuItem>
                  </Menu>
                </div>
              </Toolbar>
              <Drawer
                open={this.state.drawer}
                onClose={this.toggleDrawer("drawer", false)}
              >
                {this.sideList("drawer")}
              </Drawer>
            </AppBar>
            <Component route={route} />
          </>
        );
    }
}

export default withStyles(styles)(PrivateLayout);