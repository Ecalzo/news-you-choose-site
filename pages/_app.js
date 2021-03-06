import theme from "../src/theme";
import ButtonAppBar from "../components/app-bar";
import { ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "#F5F4F5",
    },
  },
}));

function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
