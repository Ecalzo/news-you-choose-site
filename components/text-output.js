import React from "react";
import Typography from "@material-ui/core/Typography";

export default function TextOutput({ score, scoreText, probabilities }) {
  return scoreText ? (
    <>
      <Typography variant="h6" gutterBottom>
        Sentiment Score: {score} {scoreText ? `(${scoreText})` : ""}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Probabilities: {probabilities}
      </Typography>
    </>
  ) : null;
}
