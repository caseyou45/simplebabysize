import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export default function Title(props) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={6}>
        <div className="title">
          <h1 className="head">
            Fetal Development: Your Pregnancy Week by Week
          </h1>
          <h2> Simple Sizes without Silly Comparisons</h2>
          <hr className="ruleOne"></hr>
          <hr className="ruleTwo"></hr>
          <Paper>
            <p className="body">
              It's helpful for a parent-to-be to know the size of their baby as
              he or she develops week by week. But many charts and infographics
              use unhelpful comparisons, such as vegetables or car parts. Clear
              up the confusion below by finding out when you are due. Choose a
              hand size. Then see a simple comparison that leaves no room for
              doubt.
            </p>
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
