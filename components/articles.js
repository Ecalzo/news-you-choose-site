import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "./card";
import { blue } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";

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
                image={
                  "data:image/png;base64,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"
                }
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
