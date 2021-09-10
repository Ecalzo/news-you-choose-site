import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateIcon from "@material-ui/icons/Create";
import InfoIcon from "@material-ui/icons/Info";
import BookIcon from "@material-ui/icons/Book";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import NavIcon from "./nav-icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 0.5,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar variant="dense">
          <Typography className={classes.title}></Typography>
          <NavIcon title="News" href="/">
            <BookIcon fontSize="large" />
          </NavIcon>
          <NavIcon title="API" href="/query">
            <CreateIcon fontSize="large" />
          </NavIcon>
          <NavIcon title="Statistics" href="/stats">
            <EqualizerIcon fontSize="large" />
          </NavIcon>
          <NavIcon title="About" href="/about">
            <InfoIcon fontSize="large" />
          </NavIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
}
