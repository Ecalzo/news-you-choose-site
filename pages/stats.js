import React from "react";
import Head from "next/head";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "../components/title";
import Grid from "@material-ui/core/Grid";
import { useStats, useVotes } from "../lib/swr-hooks";
import { getCurrentDate } from "../lib/get-current-date";
import LineChart from "../components/line-chart";
import BarChartVotes from "../components/bar-chart-votes";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid: {
      backgroundColor: theme.palette.background.secondary,
      borderRadius: theme.shape.borderRadius,
      border: theme.common.border,
      padding: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
  })
);

export default function Stats() {
  const classes = useStyles();
  const currentDate = getCurrentDate();
  const [date, setDate] = React.useState(currentDate);
  const { articles, isLoading } = useStats({ date });
  const { votes, isVotesLoading, isValidating, mutateFunc } = useVotes();

  setTimeout(mutateFunc, 2000);

  if (isLoading) {
    return (
      <div>
        <Head>
          <title>News You Choose</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Grid container spacing={5} alignContent="center">
            <Grid item xs={12}>
              <Title />
            </Grid>
          </Grid>
          <Grid container spacing={5} alignContent="center">
            <Grid item xs={12}>
              <div></div>
            </Grid>
            <Grid item xs={12}>
              <div></div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>News You Choose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid container spacing={5} alignContent="center">
          <Grid item xs={12}>
            <Title />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignContent="center">
          <Grid item xs={12} className={classes.grid}>
            <LineChart articles={articles} />
          </Grid>
          <Grid item xs={12} className={classes.grid}>
            {isVotesLoading ? null : <BarChartVotes votes={votes} />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
