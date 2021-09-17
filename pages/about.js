import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Title from "../components/title";
import ModelForm from "../components/model-form";
import Grid from "@material-ui/core/Grid";
import { CallMissedSharp } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import OverviewImg from "../public/images/Overview_News_You_Choose.png";
import LambdaImg from "../public/images/Detailed_View_News_You_Choose_Lambda.png";
import DatabaseImg from "../public/images/Database_ERD.png";
import ModelImg from "../public/images/Detailed_View_Model_Structure.jpg";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
    border: theme.common.border,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  responsiveSlides: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
  },
  slides: {
    border: 0,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100% !important",
    height: "100% !important",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Title />
        </Grid>
        <Grid
          item
          xs={12}
          align="center"
          className={classes.marginAutoContainer}
        >
          <div className={classes.responsiveSlides}>
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vSVC7Czsm-_FLjUCJ2DcxKMZmqit7kr6l0ki68wWqLaX1HARwsCLGx2olhJGnun_c3msJTXDUhmlTHY/embed?start=false&loop=false&delayms=3000"
              frameBorder="0"
              allowFullScreen={true}
              rm="minimal"
              className={classes.slides}
            ></iframe>
          </div>
        </Grid>
        <Typography gutterBottom variant="h4">
          Architecture
        </Typography>
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.marginAutoContainer}
          align="center"
        >
          <Image src={OverviewImg} />
        </Grid>
        <Typography gutterBottom variant="h4">
          Detailed View - Lambda Architecture
        </Typography>
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.marginAutoContainer}
          align="center"
        >
          <Image src={LambdaImg} />
        </Grid>
        <Typography gutterBottom variant="h4">
          Detailed View - Model Architecture
        </Typography>
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.marginAutoContainer}
          align="center"
        >
          <Image src={ModelImg} />
        </Grid>
        <Typography gutterBottom variant="h4">
          Detailed View - Database ERD
        </Typography>
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.marginAutoContainer}
          align="center"
        >
          <Image src={DatabaseImg} />
        </Grid>
        <Typography gutterBottom variant="h4">
          ECR Repositories
        </Typography>
        <Grid item xs={12} className={classes.marginAutoContainer}>
          <Typography gutterBottom variant="h6" component="div">
            <ul>
              <li> news-you-choose</li>
              <ul>
                <li> Contains the scraper for daily news articles</li>
                <li> Used in Lambda function news-you-choose-daily-scraper</li>
              </ul>

              <li> news-you-choose-inference</li>
              <ul>
                <li>Contains the model inference/api endpoint</li>
                <li>Expects either</li>
                <ul>
                  <li>
                    An{" "}
                    <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-content-structure.html">
                      S3 event notification
                    </a>
                  </li>
                  <li>
                    A JSON string with a "text" key: in the POST request body
                  </li>
                </ul>
              </ul>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
