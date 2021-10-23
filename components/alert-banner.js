import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
    "& > * + *": {
      marginTop: theme.spacing(5),
      padding: theme.spacing(5),
    },
  },
}));

export default function AlertBanner() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity="info"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          News You Choose is no longer actively scraping articles - learn more
          about the project on the{" "}
          {
            <Link href="/about">
              <a
                onClick={() => {
                  setOpen(false);
                }}
              >
                About
              </a>
            </Link>
          }{" "}
          page.
        </Alert>
      </Collapse>
    </div>
  );
}
