import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(),
      width: "15em",
    },
  })
);

export default function DiscreteSlider({ onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Sentiment Score
      </Typography>
      <Slider
        defaultValue={5}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="auto"
        onChange={onChange}
      />
    </div>
  );
}
