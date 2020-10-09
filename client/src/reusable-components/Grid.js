import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px',
    display: "flex-column"
  }
}));

const GridCentered = (props) => {
  const classes = useStyles();
//   const [spacing, setSpacing] = React.useState(2);

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };


  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12} md={4}>
        <Grid container justify="center">
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridCentered;
