import React from "react";
import Head from "next/head";
import Articles from "../components/articles";
import { makeStyles } from "@material-ui/core/styles";
import FilterMenu from "../components/filter-menu";
import Container from "@material-ui/core/Container";
import Title from "../components/title";
import { useArticles } from "../lib/swr-hooks";
import { getCurrentDate } from "../lib/get-current-date";
import Grid from "@material-ui/core/Grid";
import SkeletonArticles from "../components/skeleton-articles";
import { getSkeleArticles } from "../lib/create-skele-articles";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
}));

export default function Home() {
  const currentDate = getCurrentDate();
  const classes = useStyles();
  const [sentiment, setSentiment] = React.useState(4);
  const [date, setDate] = React.useState(currentDate);
  const { articles, isLoading } = useArticles({ sentiment, date });

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
            <Grid item xs={12}>
              <FilterMenu />
            </Grid>
            <Grid item xs={12}>
              <SkeletonArticles articles={getSkeleArticles()} />
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
          <Grid item xs={12}>
            <FilterMenu setSentiment={setSentiment} setDate={setDate} />
          </Grid>
          <Grid item xs={12}>
            <Articles articles={articles} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
