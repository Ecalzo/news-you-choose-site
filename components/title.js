import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    display: "flex",
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
  },
  marginAutoItem: {
    padding: theme.spacing(5),
    margin: "auto",
  },
}));

export default function Title(props) {
  const classes = useStyles();
  return (
    <div className={classes.marginAutoItem}>
      <Typography align="center" variant="h3">
        News You Choose
      </Typography>
    </div>
  );
}
