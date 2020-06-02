import React, { useState } from "react";
import DueDate from "./Methods/DueDate";
import Conception from "./Methods/Conception";
import LastPeriod from "./Methods/LastPeriod";
import Grid from "@material-ui/core/Grid";
import MethodSelect from "./MethodSelect";

export default function Input(props) {
  const [showDueDate, setShowDueDate] = useState(true);
  const [showConception, setShowConception] = useState(false);
  const [showLastPeriod, setShowLastPeriod] = useState(false);
  const [message, setMessage] = useState("");

  function getByDueDate(date) {
    let firstDate = new Date();
    let secondDate = new Date(date);
    const oneDay = 24 * 60 * 60 * 1000;

    const diffDays = Math.round((secondDate - firstDate) / oneDay);

    let weeksTill = diffDays / 7;
    let weeksPreg = 39 - Math.ceil(weeksTill);

    if (weeksPreg >= 0 && weeksPreg <= 40) {
      props.actualDueDate(new Date(secondDate));
      props.getDate(weeksPreg);
      setMessage("");
    } else {
      setMessage("Was not able to complete process. Choose another date.");
    }
  }

  function getByConception(date) {
    let today = new Date();
    let conceptionDate = new Date(date);
    let dueDate = conceptionDate.setDate(conceptionDate.getDate() + 266);

    const oneDay = 24 * 60 * 60 * 1000;

    const diffDays = Math.round((dueDate - today) / oneDay);

    let weeksTill = diffDays / 7;
    let weeksPreg = 39 - Math.ceil(weeksTill);

    if (weeksPreg >= 0 && weeksPreg <= 40) {
      props.actualDueDate(new Date(dueDate));
      props.getDate(weeksPreg);
      setMessage("");
    } else {
      setMessage("Was not able to complete process. Choose another date.");
    }
  }

  function getByPeriod(input) {
    let today = new Date();
    let conceptionDate = new Date(input.date);

    let cycleDifference = 28 - input.period;
    let eightMonthOut = 280 - cycleDifference;

    let dueDate = conceptionDate.setDate(
      conceptionDate.getDate() + eightMonthOut
    );

    const oneDay = 24 * 60 * 60 * 1000;

    const diffDays = Math.round((dueDate - today) / oneDay);

    let weeksTill = diffDays / 7;
    let weeksPreg = 39 - Math.ceil(weeksTill);

    if (weeksPreg >= 0 && weeksPreg <= 40) {
      props.actualDueDate(new Date(dueDate));
      props.getDate(weeksPreg);
      setMessage("");
    } else {
      setMessage("Was not able to complete process. Choose another date.");
    }
  }

  function getMethod(method) {
    switch (method) {
      case "dueDate":
        setShowDueDate(true);
        setShowConception(false);
        setShowLastPeriod(false);

        break;
      case "conception":
        setShowConception(true);
        setShowDueDate(false);
        setShowLastPeriod(false);

        break;

      case "lastPeriod":
        setShowLastPeriod(true);
        setShowDueDate(false);
        setShowConception(false);

        break;
      default:
      // code block
    }
  }
  return (
    <Grid item xs={12} className="input">
      <MethodSelect getMethod={getMethod} />
      {showDueDate && (
        <DueDate
          onAdd={getByDueDate}
          id="by-due-date"
          name="by-due-date"
          label="By Due Date"
          message={message}
        />
      )}
      {showConception && (
        <Conception
          onAdd={getByConception}
          id="by-conception"
          name="by-conception"
          label="By Date of Conception"
          message={message}
        />
      )}
      {showLastPeriod && (
        <LastPeriod
          onAdd={getByPeriod}
          id="by-period"
          name="by-period"
          label="By Last Period"
          message={message}
        />
      )}

      <hr className="ruleThree" />
    </Grid>
  );
}
