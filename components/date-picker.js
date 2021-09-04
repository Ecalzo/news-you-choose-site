import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(0.7),
      marginLeft: theme.spacing(15),
      width: "15em",
    },
    margin: {
      marginLeft: theme.spacing(4),
    },
  })
);

export default function DatePicker({ onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        id="discrete-slider-small-steps"
        gutterBottom
        className={classes.margin}
      >
        Article Date
      </Typography>
      <TextField
        id="date"
        type="date"
        defaultValue="2021-01-01"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={onChange}
      />
    </div>
  );
}
