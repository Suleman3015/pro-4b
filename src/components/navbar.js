import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translate(-150%,0)" },
      { transform: "translate(0,0)" },
    ],
    timing: {
      // Start with a 500ms delay
      duration: 600, // Run for 1000ms
      iterations: 1, // Repeat once
      direction: "alternate",
      // Run the animation forwards and then backwards
      // Use a fancy timing function
    },
    // onReady: ({ playState, animate, animation }) => {
    //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    // },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    // },
    // More useful options...
  });

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          position: "absolute",
          display: "flex",
          flexWrap: "wrap",
          marginTop: 10,
          background: "transparent",
          flexDirection: "column",

          boxShadow: "none",
          color: "white",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <div ref={ref}>
            <Button color="inherit">About Us</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
