import DiscreteSlider from "./slider";
import DatePicker from "./date-picker";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.secondary,
    border: theme.common.border,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
  marginAutoContainer: {},
}));

export default function FilterMenu({ setSentiment, setDate }) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item key="sentiment-picker" lg={6} md={6} sm={6} xs={12}>
          <DiscreteSlider
            onChange={(e, val) => {
              if (setSentiment) {
                // silences error where setSentiment is not defined
                setSentiment(val);
              }
            }}
          />
        </Grid>
        <Grid item key="date-picker" lg={6} md={6} sm={6} xs={12}>
          <DatePicker onChange={(e) => setDate(e.target.value)} />
        </Grid>
      </Grid>
    </Container>
  );
}
