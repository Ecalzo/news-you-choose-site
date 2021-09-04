import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AlertDialog from "./alert-dialog";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {},
  helpIcon: {},
}));

export default function ImgMediaCard({
  id,
  title,
  content,
  url,
  src,
  image_url,
  onError,
}) {
  const classes = useStyles();
  const [upvote, setUpvote] = usePersistedState("upvoteState" + id, false);
  const [downvote, setDownvote] = usePersistedState(
    "downvoteState" + id,
    false
  );

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

  return (
    <Card className={classes.root}>
      <CardActionArea href={url} target="_blank" rel="noopener">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image_url}
          title="Contemplative Reptile"
          onError={onError}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title.length > 60 ? title.slice(0, 60) + "..." : title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </Typography>
          <Typography variant="body2">
            {src.split(".").slice(-2)[0].toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item md={3} sm={3} xs={3}>
            <IconButton onClick={handleUpvote}>
              <ThumbUpIcon color={upvote ? "primary" : "action"} />
            </IconButton>
          </Grid>
          <Grid item md={3} sm={3} xs={3}>
            <IconButton onClick={handleDownvote}>
              <ThumbDownIcon color={downvote ? "primary" : "action"} />
            </IconButton>
          </Grid>
          <Grid item md={3} sm={3} xs={3}>
            {" "}
          </Grid>
          <Grid item md={3} sm={3} xs={3}>
            <div className={classes.helpIcon}>
              <AlertDialog />
            </div>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );

  async function handleUpvote(e) {
    if (upvote === true) {
      try {
        const res = await fetch("/api/downvote-entry", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);
      } catch (e) {
        throw Error(e.message);
      }
      setUpvote(false);
    } else if (downvote == true) {
      try {
        for (let i = 0; i < 2; i++) {
          const res = await fetch("/api/upvote-entry", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id,
            }),
          });
          const json = await res.json();
          if (!res.ok) throw Error(json.message);
        }
      } catch (e) {
        throw Error(e.message);
      }
      setUpvote(true);
      setDownvote(false);
    } else {
      try {
        const res = await fetch("/api/upvote-entry", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);
      } catch (e) {
        throw Error(e.message);
      }
      setUpvote(true);
      setDownvote(false);
    }
  }

  async function handleDownvote(e) {
    if (downvote === true) {
      try {
        const res = await fetch("/api/upvote-entry", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);
      } catch (e) {
        throw Error(e.message);
      }
      setDownvote(false);
    } else if (upvote == true) {
      try {
        for (let i = 0; i < 2; i++) {
          const res = await fetch("/api/downvote-entry", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id,
            }),
          });
          const json = await res.json();
          if (!res.ok) throw Error(json.message);
        }
      } catch (e) {
        throw Error(e.message);
      }
      setDownvote(true);
      setUpvote(false);
    } else {
      try {
        const res = await fetch("/api/downvote-entry", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          }),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);
      } catch (e) {
        throw Error(e.message);
      }
      setDownvote(true);
      setUpvote(false);
    }
  }
}
