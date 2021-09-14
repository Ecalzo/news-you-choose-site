import React from "react";
import TextInput from "./text-input";
import TextOutput from "./text-output";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PieChart from "../components/pie-chart";
import CircularIndeterminate from "./circular-indeterminate";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
    border: theme.common.border,
    padding: theme.spacing(1),
  },
  inputStyle: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
  buttonStyle: {
    marginTop: theme.spacing(1),
  },
  textOutputStyle: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

export default function ModelForm() {
  const [score, setScore] = React.useState();
  const [scoreText, setScoreText] = React.useState();
  const [probabilities, setProbabilities] = React.useState();
  const [text, setText] = React.useState(
    "Good Samaritans Rescue 60 Cows From Hurricane Ida Floodwaters"
  );
  const [showPie, setShowPie] = React.useState(false);
  const [pieSlices, setPieSlices] = React.useState([1, 1, 1]);
  const [loading, setLoading] = React.useState(false);

  const classes = useStyles();
  return (
    <div>
      <Container className={classes.marginAutoContainer} maxWidth="md">
        <form className={classes.inputStyle}>
          <TextInput
            label="Text"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonStyle}
            onClick={() => {
              setLoading(true);
              fetch(process.env.NEXT_PUBLIC_API_GATEWAY_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  text,
                }),
              })
                .then((response) => response.json())
                .then((data) => {
                  setScore(data.sentiment);
                  setScoreText(data.sentiment_text);
                  setProbabilities(
                    `{NEGATIVE : ${
                      Math.round(data.probabilities[0] * 100) / 100
                    }, 
                    NEUTRAL : ${Math.round(data.probabilities[1] * 100) / 100},
                    POSITIVE : ${
                      Math.round(data.probabilities[2] * 100) / 100
                    }}`
                  );
                  setLoading(false);
                  setPieSlices(data.probabilities);
                  setShowPie(true);
                });
            }}
          >
            Submit
          </Button>
        </form>
        <div className={classes.textOutputStyle}>
          {loading ? (
            <CircularIndeterminate />
          ) : (
            <TextOutput
              score={score}
              scoreText={scoreText}
              probabilities={probabilities}
            />
          )}
        </div>
        <Container maxWidth="sm">
          <div>
            {showPie === true && !loading ? (
              <PieChart pieSlices={pieSlices} />
            ) : null}
          </div>
        </Container>
      </Container>
    </div>
  );
}
