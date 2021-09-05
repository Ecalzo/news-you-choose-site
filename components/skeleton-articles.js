import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardSkeleton from "./card-skeleton";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grid: {
      backgroundColor: theme.palette.background.secondary,
      borderRadius: theme.shape.borderRadius,
      border: theme.common.border,
      padding: theme.spacing(5),
    },
  })
);

export default function SkeletonArticles({ articles }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        {articles.map((article) => (
          <Grid item md={4} sm={6} xs={12}>
            <CardSkeleton key={article.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
