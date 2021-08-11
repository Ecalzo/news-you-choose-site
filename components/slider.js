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

const marks = [
	{
		value:0,
		label:'NEGATIVE',
	},
	{
		value:2,
		label:'NEUTRAL',
	},
	{
		value:4,
		label:'POSITIVE',
	},
];



export default function DiscreteSlider({ onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Sentiment Score
      </Typography>
      <Slider
        defaultValue={4}
	aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks={marks}
        min={0}
        max={4}
        valueLabelDisplay="auto"
	track={false}
        onChange={onChange}
      />
    </div>
  );
}
