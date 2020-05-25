import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';


export default function Title(props) {
  return (
    <Grid item xs={12}>
      <div className="title">
        <h1 className="head"> Simple Baby Size</h1>
        <hr className="ruleOne"></hr>
        <hr className="ruleTwo"></hr>

        <Box my={3} mx={2} p={2} pl={3} boxShadow={3} className="body">
            <p>

            It's helpful for a parent-to-be to know the size of their baby as he or she develops week by week. But many
            infographics use unhelpful comparisons, such as vegetables or car parts. Clear up the confusion below by finding out when you are due. Choose a hand size. Then see a simple comparison 
            that leaves no room for doubt.

            </p>
        </Box>
      </div>
    </Grid>
  );
}
