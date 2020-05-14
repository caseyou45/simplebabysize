import React from "react";
import weeks from "../babydata";
import Grid from "@material-ui/core/Grid";
import hand from "../../src/images/HAND_USE.png";
import baby from "../../src/images/BABY_USE.png";

export default function Display(props) {
  let comparitorValue;
  let comparitorSoruce;

  switch (props.comparitor) {
    case "femaleHand":
      comparitorValue = 6.8;
      comparitorSoruce = hand;

      break;
    case "maleHand":
      comparitorValue = 7.6;
      comparitorSoruce = hand;

      break;

    default:
    // code block
  }

  let week = weeks[props.displayDate];
  let realHandHeight = comparitorValue / 4;
  let realBabyHieght = week.height / 4;

  if (props.displayDate > 16) {
    realHandHeight = (7.5 * comparitorValue) / week.height / 4;
    realBabyHieght = 7.5 / 4;
  }
  let computedBabyHeaight = realBabyHieght + "in";
  let computedHandHeight = realHandHeight + "in";

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="container"
      spacing={0}
      // className="object-container"
      // className="baby-container"
    >
      <Grid item xs={6} sm={6}>
        <img
          alt="object of comparison"
          src={comparitorSoruce}
          style={{ height: computedHandHeight }}
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <img alt="baby" src={baby} style={{ height: computedBabyHeaight }} />
      </Grid>
    </Grid>
  );
}
