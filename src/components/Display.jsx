import React from "react";
import weeks from "../babydata";
import Grid from "@material-ui/core/Grid";
import hand from "../../src/images/HAND_2.png";
import baby from "../../src/images/BABY_2.png";


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
  let realHandHeight = comparitorValue / 5;
  let realBabyHieght = (week.height / 5) / .639;
  

  if (props.displayDate > 19 ) {
    realHandHeight = (10.10 * comparitorValue) / week.height / 5;
    realBabyHieght = 10.10 / 5;
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


    >
      <Grid item className="item" >
        <img
          alt="object of comparison"
          src={comparitorSoruce}
          style={{ height: computedHandHeight }}
        />
      </Grid>
      <Grid item className="item" >
        <img alt="baby" src={baby} style={{ height: computedBabyHeaight }} />
      </Grid>
    </Grid>
  );
}
