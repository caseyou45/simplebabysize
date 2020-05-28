import React from "react";
import weeks from "../babydata";
import Grid from "@material-ui/core/Grid";

export default function WeekInfo(props) {

  let title;
  let info;
  let dueDate;
  let dueDateInfo;

  if (props.day === 41) {
    title = "";
    info = "";
    dueDate = "";
    dueDateInfo = "";
  }
  
  else {
    title = weeks[props.day].title;
    info = "Your baby is " + weeks[props.day].height + " inches long ";
    dueDate =
      props.dueDate.getMonth() +
      1 +
      "/" +
      props.dueDate.getDate() +
      "/" +
      props.dueDate.getFullYear();

    dueDateInfo = "Due Date is ";

  
  }
   

  return (
    <Grid className="info" item xs={12}>
      <h3> {title} </h3>
      <h4>
        {" "}
        {dueDateInfo}
        {dueDate}{" "}
      </h4>

      <p> {info} </p>
      
      {props.day <= 19 && (
        <p className="rumpStyle"> from head to rump</p>
      )}
      {props.day > 19 && props.day !== 41 &&  (
        <p className="toeStyle"> from head to toe</p>
      )}

    </Grid>
  );
}
