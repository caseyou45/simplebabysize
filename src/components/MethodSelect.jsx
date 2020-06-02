import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    textAlign: "left",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MethodSelect(props) {
  const classes = useStyles();

  const [method, setMethod] = useState("dueDate");

  function handleChange(event) {
    props.getMethod(event.target.value);
    setMethod(event.target.value);
    event.preventDefault();
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.text}
          id="demo-simple-select-helper-label"
        >
          Method of Computation
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={method}
          onChange={handleChange}
        >
          */}
          <MenuItem value={"dueDate"}>Due Date</MenuItem>
          <MenuItem value={"conception"}>Date of Conception</MenuItem>
          <MenuItem value={"lastPeriod"}>Last Period</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
    </div>
  );
}
