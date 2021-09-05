import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  })
);

// will need to revise 'value','label' mapping according to labelling schema
const marks = [
  {
    value: 0,
    label: "NEGATIVE",
  },
  {
    value: 1,
    label: "NEUTRAL",
  },
  {
    value: 2,
    label: "POSITIVE",
  },
];

export default function DiscreteSlider({ onChange }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Container maxWidth="sm">
        <Grid item key="sentiment-picker-title" md={12} xs={12}>
          <Typography
            id="discrete-slider-title"
            gutterBottom
            variant="h6"
            align="center"
          >
            Sentiment Score
          </Typography>
        </Grid>
        <Grid item key="discrete-slider-selector" md={12} xs={12}>
          <div className={classes.root}>
            <Slider
              defaultValue={1}
              step={null}
              marks={marks}
              min={0}
              max={2}
              valueLabelDisplay="off"
              track={false}
              onChange={onChange}
            />
          </div>
        </Grid>
      </Container>
    </Grid>
  );
}
