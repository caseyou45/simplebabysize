import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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

export default function Comparison(props) {
  const classes = useStyles();

  const [compare, setCompare] = useState("femaleHand");

  function handleChange(event) {
    props.getComparison(event.target.value);
    setCompare(event.target.value);
    event.preventDefault();
  }

  function handleHelperText(compare) {
    switch (compare) {
      case "femaleHand":
        return "6.8 inces (palm to finger tip)";

      case "maleHand":
        return "7.6 inces (palm to finger tip)";

      default:
      // code block
    }
  }

  return (
    <Grid item xs={12}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          Pick Hand Size
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={compare}
          onChange={handleChange}
        >
          */}
          <MenuItem value={"femaleHand"}>Female Hand</MenuItem>
          <MenuItem value={"maleHand"}>Male Hand</MenuItem>
        </Select>
        <FormHelperText>{handleHelperText(compare)}</FormHelperText>
      </FormControl>
    </Grid>
  );
}
