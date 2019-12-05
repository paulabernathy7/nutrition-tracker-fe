import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Global/styled";
import moment from "moment-timezone";
import useGroupBy from "./custom hooks/useGroupBy";
import CaloricBudget from "./components/CaloricBudget";
import MacroBudgets from "./components/MacroBudgets";
import Pagination from "./components/Pagination";
import TimeLog from "./components/TimeLog";
import DisplaySettings from "./components/DisplaySettings";
import {
  fetchNutritionBudgets,
  fetchDailyLog
} from "../../store/actions/dailyLogActions";

const DailyLog = ({ height }) => {
  const dispatch = useDispatch();

  const currentTimeZone = moment.tz.guess();
  const today = moment.tz("2019-11-24", currentTimeZone).format("YYYY-MM-DD");

  const { budgets, consumed, dailyLog } = useSelector(state => state.dailyLog);
  const firebaseID = useSelector(state => state.firebase.auth.uid);

  const [currentDate, setCurrentDate] = useState(today);
  const [interval, setInterval] = useState(30);

  const groupedDailyLog = useGroupBy(interval, dailyLog);

  useEffect(
    () => {
      if (firebaseID) dispatch(fetchNutritionBudgets(firebaseID));
    },
    [dispatch, firebaseID]
  );

  useEffect(
    () => {
      if (firebaseID)
        dispatch(
          firebaseID && fetchDailyLog(firebaseID, currentDate, currentTimeZone)
        );
    },
    [currentDate, currentTimeZone, dispatch, firebaseID]
  );

  const updateInterval = interval => setInterval(interval);
  const updateCurrentDate = newDate => setCurrentDate(newDate);

  return (
    <Container height={height} fluid>
      <CaloricBudget
        total={budgets.caloricBudget}
        consumed={consumed.caloriesConsumed}
      />
      <MacroBudgets
        fatsTotal={budgets.fatBudget}
        carbsTotal={budgets.carbBudget}
        protienTotal={budgets.proteinBudget}
        fatsConsumed={consumed.fatsConsumed}
        carbsConsumed={consumed.carbsConsumed}
        protienConsumed={consumed.proteinConsumed}
      />
      <Pagination
        currentDate={currentDate}
        currentTimeZone={currentTimeZone}
        updateCurrentDate={updateCurrentDate}
      />
      <DisplaySettings
        interval={interval}
        currentDate={currentDate}
        updateInterval={updateInterval}
        currentTimeZone={currentTimeZone}
      />
      <TimeLog dailyLog={groupedDailyLog} />
    </Container>
  );
};

export default DailyLog;
