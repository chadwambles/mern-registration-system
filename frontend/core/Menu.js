import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./../auth/tool";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname == path) return { color: "#29434e" };
  else return { color: "#ffffff" };
};
const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Login System
      </Typography>
      <Link to="/">
        <IconButton aria-label="Home" style={isActive(history, "/")}>
          <HomeIcon />
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive(history, "/users")}>Users</Button>
      </Link>
      {!auth.checkAuth() && (
        <span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign up</Button>
          </Link>
          <Link to="/login">
            <Button style={isActive(history, "/login")}>Login</Button>
          </Link>
        </span>
      )}
      {auth.checkAuth() && (
        <span>
          <Link to={"/user/" + auth.checkAuth().user._id}>
            <Button
              style={isActive(history, "/user/" + auth.checkAuth().user._id)}
            >
              My Profile
            </Button>
          </Link>
          <Button
            color="inherit"
            onClick={() => {
              auth.removeToken(() => history.push("/"));
            }}
          >
            Logout
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;
