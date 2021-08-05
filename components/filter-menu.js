import DiscreteSlider from "./slider";
import DatePicker from "./date-picker";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    width: "40em",
    height: "6em",
    display: "flex",
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
}));

export default function FilterMenu({ setSentiment, setDate }) {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.marginAutoContainer} maxWidth="md">
        <DiscreteSlider
          onChange={(e, val) => {
            if (setSentiment) {
              // silences error where setSentiment is not defined
              setSentiment(val);
            }
          }}
        />

        <DatePicker onChange={(e) => setDate(e.target.value)} />
      </Container>
    </>
  );
}
