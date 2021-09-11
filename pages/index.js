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
import { v4 as uuidv4 } from "uuid";

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
  const [sentiment, setSentiment] = React.useState(1);
  const [date, setDate] = React.useState(currentDate);
  const [uuid, setUuid] = usePersistedState("uuid", uuidv4());
  const { articles, isLoading } = useArticles({ sentiment, date });

  function usePersistedState(key, defaultValue) {
    let state, setState;
    if (typeof window !== "undefined") {
      [state, setState] = React.useState(
        () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
      );
    }
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

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
            <Articles articles={articles} uuid={uuid} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
