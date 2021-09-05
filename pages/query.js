import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "../components/title";
import ModelForm from "../components/model-form";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
}));

export default function Query() {
  return (
    <div>
      <Head>
        <title>News You Choose</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid container spacing={5} alignContent="center">
          <Grid item xs={12}>
            <Title />
          </Grid>
          <Grid item xs={12}>
            <ModelForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
