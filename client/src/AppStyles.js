import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    padding: "5px",
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    fontSize: "38px !important",
  },
  image: {
    marginLeft: "15px",
    objectFit: "contain",
  },
  [theme.breakpoints.down("sm")]: {
    /* breakpoint for mobile view */
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
