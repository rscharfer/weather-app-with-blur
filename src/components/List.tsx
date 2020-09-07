import React from "react";
import { CleanedUpForecastData } from "../types/weatherapi";



type ListProps = {
  forecast: CleanedUpForecastData;
};

const List = ({ forecast }: ListProps) => (
  <ul>
    {forecast.map((day) => (
      <li key={day.day}>{`${day.day} ${day.temp} ${day.skies}`}</li>
    ))}
  </ul>
);

export default List;