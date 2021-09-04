import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "./card";
import { blue } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";

const url_map = {
  "http://nytimes.com": "https://g.foolcdn.com/art/companylogos/square/nyt.png",
  "https:www.nytimes.com":
    "https://g.foolcdn.com/art/companylogos/square/nyt.png",
  "http:rss.cnn.com":
    "https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg",
  "https:www.foxnews.com":
    "https://variety.com/wp-content/uploads/2013/12/fox-news-logo.jpg?w=681&h=383&crop=1",
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(5),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    grid: {
      backgroundColor: theme.palette.background.secondary,
      borderRadius: theme.shape.borderRadius,
      border: theme.common.border,
      padding: theme.spacing(5),
    },
  })
);

export default function Articles({ articles }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.grid} maxWidth="lg">
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid item key={article.id} md={3} xs={6}>
              <ImgMediaCard
                id={article.id}
                key={article.id}
                title={article.title}
                content={article.content}
                url={article.url}
                src={article.src}
                image_url={
                  article.image_url ? article.image_url : url_map[article.src]
                }
                onError={(e) => {
                  e.target.src = url_map[article.src];
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
