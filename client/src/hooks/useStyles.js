import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
    border: "solid 2px red",
    borderRadius: "15px",
    margin: "2%",
    backgroundColor: "pink"
  }
}));
