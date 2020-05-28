import React, { useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function LastPeriod(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState(0);

  const handleDateChange = (event, date) => {
    setSelectedDate(date);
  };

  const handlePeriodChange = (event, period) => {
    setSelectedPeriod(event.target.value);
  };

  function handleClick(e) {
    props.onAdd({
      date: selectedDate,
      period: selectedPeriod
    });
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

      <form noValidate autoComplete="off">
        <TextField
          pt={10}
          margin="normal"
          value={selectedPeriod}
          onChange={handlePeriodChange}
          id="standard-number"
          label="Enter Average Days of Cycle"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
      <p className="alert">{props.message}</p>
      <Button onClick={handleClick} variant="outlined">
        Submit Date
      </Button>
    </MuiPickersUtilsProvider>
  );
}
