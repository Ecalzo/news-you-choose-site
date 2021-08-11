import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({ id, title, content, url, image }) {
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
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title.length > 60 ? title.slice(0, 60) + "..." : title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleUpvote}>
          <ThumbUpIcon color={upvote ? "primary" : "action"} />
        </Button>
        <Button onClick={handleDownvote}>
          <ThumbDownIcon color={downvote ? "primary" : "action"} />
        </Button>
        <Button
          target="_blank"
          rel="noopener"
          variant="contained"
          href={url}
          color="primary"
        >
          Go
        </Button>
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
