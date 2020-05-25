import React, { useState } from "react";
import "../styles.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Display from "./Display";
import Input from "./Input";
import WeekInfo from "./WeekInfo";
import Comparison from "./Comparison";
import Grid from "@material-ui/core/Grid";
import Title from "./Title";
import Footer from "./Footer";
import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';


export default function Home() {
  const [day, setDay] = useState(41);
  const [dueDate, setDueDate] = useState(new Date());

  const [comparitor, setComparitor] = useState("femaleHand");

  const createDueDate = newValue => {
    setDay(newValue);
  };

  const actualDueDate = dueDateValue => {
    setDueDate(dueDateValue);
  };

  const backward = () => {
    if (day === 0) {
      setDay(day);
    }
    if (day > 0 && day <= 40) {
      setDay(day - 1);
    }
  };

  const forward = () => {
    if (day === 41) {
      setDay(day);
    }
    if (day >= 0 && day <= 39) {
      setDay(day + 1);
    }
  };

  function setComparison(comparison) {
    setComparitor(comparison);
  }
  return (
    <div>
      <Grid container spacing={1}>
        <Title />
        <Input getDate={createDueDate} actualDueDate={actualDueDate} />
        <WeekInfo day={day} dueDate={dueDate} />
        <Comparison getComparison={setComparison} />
        <Display displayDate={day} comparitor={comparitor} />
        <Grid item xs={12}>
          <ButtonGroup
            className="buttons"
            variant="text"
            color="default"
            aria-label="text default button group"
          >
            <Button 
              startIcon={<ArrowLeftRoundedIcon className="icon" />}
              onClick={() => backward(day)}>Previous Week</Button>
            <Button 
              endIcon={<ArrowRightRoundedIcon className="icon" />}
              onClick={() => forward(day)}>Next Week</Button>
          </ButtonGroup>
        </Grid>
        <Footer displayDate={day}/>
      </Grid>
    </div>
  );
}
