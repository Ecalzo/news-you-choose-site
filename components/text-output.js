import React from "react";
import Typography from "@material-ui/core/Typography";

export default function TextOutput({ score, probabilities }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sentiment Score: {score}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Probabilities: {probabilities}
      </Typography>
    </>
  );
}
