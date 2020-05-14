import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Title(props) {
  return (
    <Grid item xs={12}>
      <div className="title">
        <h1 className="head"> a Glimpse of Size</h1>
        <p>
          {" "}
          Find out how many weeks you are along and select what you'd like to
          compare with.{" "}
        </p>
      </div>
    </Grid>
  );
}
