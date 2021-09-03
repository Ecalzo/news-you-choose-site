import React from "react";
import TextInput from "./text-input";
import TextOutput from "./text-output";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ContactSupportOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    width: "40em",
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
  const [probabilities, setProbabilities] = React.useState();
  const [text, setText] = React.useState("This was a good article!");

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
                  console.log(data);
                  setScore(data.sentiment);
                  setProbabilities(data.probabilities);
                });
            }}
          >
            Submit
          </Button>
        </form>
        <div className={classes.textOutputStyle}>
          <TextOutput score={score} probabilities={probabilities} />
        </div>
      </Container>
    </div>
  );
}
