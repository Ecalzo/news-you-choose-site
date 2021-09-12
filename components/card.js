import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AlertDialog from "./alert-dialog";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip";

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
  date,
  image_url,
  uuid,
  onError,
}) {
  const classes = useStyles();
  const [upvote, setUpvote] = usePersistedState("upvoteState" + id, false);
  const [downvote, setDownvote] = usePersistedState(
    "downvoteState" + id,
    false
  );
  const [neutvote, setNeutvote] = usePersistedState(
    "neutvoteState" + id,
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
          <Typography gutterBottom variant="body2">
            {src.split(".").slice(-2)[0].toUpperCase()}
          </Typography>
          <Typography align="right" variant="caption">
            {date.slice(0, 10)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={2}>
          <Grid item md={2} sm={2} xs={3}>
            <IconButton onClick={handleDownvote}>
              <Tooltip title="Negative">
                <RemoveIcon color={downvote ? "primary" : "action"} />
              </Tooltip>
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} xs={3}>
            <IconButton onClick={handleNeutvote}>
              <Tooltip title="Neutral">
                <RadioButtonUncheckedIcon
                  color={neutvote ? "primary" : "action"}
                />
              </Tooltip>
            </IconButton>
          </Grid>
          <Grid item md={2} sm={2} xs={3}>
            <IconButton onClick={handleUpvote}>
              <Tooltip title="Positive">
                <AddIcon color={upvote ? "primary" : "action"} />
              </Tooltip>
            </IconButton>
          </Grid>
          <Grid item md={4} sm={4} xs={1}></Grid>
          <Grid item md={2} sm={2} xs={2}>
            <div className={classes.helpIcon}>
              <AlertDialog />
            </div>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );

  async function deleteExistingVotes() {
    if (upvote) {
      await fetch(`/api/delete-vote?uuid=${uuid}&article_id=${id}`, {
        method: "DELETE",
      });
      setUpvote(false);
    } else if (downvote) {
      await fetch(`/api/delete-vote?uuid=${uuid}&article_id=${id}`, {
        method: "DELETE",
      });
      setDownvote(false);
    } else if (neutvote) {
      await fetch(`/api/delete-vote?uuid=${uuid}&article_id=${id}`, {
        method: "DELETE",
      });
      setNeutvote(false);
    }
  }

  async function handleUpvote() {
    if (upvote || downvote || neutvote) {
      await deleteExistingVotes();
      if (upvote) {
        setUpvote(false);
        return;
      }
    }
    // perform the upvote
    try {
      const res = await fetch("/api/create-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: uuid,
          article_id: id,
          sentiment: 2, // positive
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw Error(json.message);
      } else {
        setUpvote(true);
      }
    } catch (e) {
      throw Error(e.message);
    }
  }

  async function handleDownvote() {
    if (upvote || downvote || neutvote) {
      await deleteExistingVotes();
      if (downvote) {
        setDownvote(false);
        return;
      }
    }
    // perform the downvote
    try {
      const res = await fetch("/api/create-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: uuid,
          article_id: id,
          sentiment: 0, // negative
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw Error(json.message);
      } else {
        setDownvote(true);
      }
    } catch (e) {
      throw Error(e.message);
    }
  }

  async function handleNeutvote() {
    if (upvote || downvote || neutvote) {
      await deleteExistingVotes();
      if (neutvote) {
        setNeutvote(false);
        return;
      }
    }
    // perform the neutral vote
    try {
      const res = await fetch("/api/create-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid: uuid,
          article_id: id,
          sentiment: 1, // neutral
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw Error(json.message);
      } else {
        setNeutvote(true);
      }
    } catch (e) {
      throw Error(e.message);
    }
  }
}
