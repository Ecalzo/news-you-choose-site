import React from "react";
import Head from "next/head";
import Articles from "../components/articles";
import { makeStyles } from "@material-ui/core/styles";
import FilterMenu from "../components/filter-menu";
import Container from "@material-ui/core/Container";
import Title from "../components/title";
import { useArticles } from "../lib/swr-hooks";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [sentiment, setSentiment] = React.useState(0);
  const [date, setDate] = React.useState("2021-01-01");
  const { articles, isLoading } = useArticles({ sentiment, date });

  if (isLoading) {
    return (
      <div>
        <Head>
          <title>News You Choose</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Title />
          <FilterMenu />
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
        <Title />
        <FilterMenu setSentiment={setSentiment} setDate={setDate} />
        <Articles articles={articles} />
      </Container>
    </div>
  );
}
