import React, { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function Conception(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    setSelectedDate(date);
  };

  function handleClick(e) {
    props.onAdd(selectedDate);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id={props.id}
          name={props.id}
          label={props.label}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
      <p className="alert">{props.message}</p>
      <Button onClick={handleClick} variant="outlined">
        Submit Date
      </Button>
    </MuiPickersUtilsProvider>
  );
}
