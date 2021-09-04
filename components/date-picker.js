import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { getCurrentDate } from "../lib/get-current-date";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => createStyles({}));

export default function DatePicker({ onChange }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item key="sentiment-picker-title" md={12} xs={12}>
        <Typography id="date-picker-title" gutterBottom align="center">
          Article Date
        </Typography>
      </Grid>
      <Grid item key="date-picker-selector" md={12} xs={12} align="center">
        <TextField
          id="date"
          type="date"
          defaultValue={getCurrentDate()}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={onChange}
          className={classes.datePicker}
        />
      </Grid>
    </Grid>
  );
}
