import {fullDayClimate} from "~/store/climate/mappers/fullDayClimate";
import type {I_ClimateData} from "~/models/store/climate/interfaces";

export const getClimateData = async (): Promise<I_ClimateData> => {
  const climateData: any = {};
  const coordinates: any = await fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=Yerevan&limit=5&appid=f761adfc737b77aedb02b25d424d05d3",
  ).then((response) => response.json());
    let lat = coordinates[0].lat;
    let lon = coordinates[0].lon;
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&units=metric&appid=f761adfc737b77aedb02b25d424d05d3`,
    )
      .then((response) => response.json())
      .then((data: any) => {
          climateData.fullDayClimate = fullDayClimate(data.list)
          climateData.wind = data.list[0].wind.speed + '';
          climateData.conditions = data.list[0].weather[0].main.toLowerCase();
          climateData.sunInput = data.city.sunrise + '';
          climateData.sunOutput = data.city.sunset + '';
          climateData.country = data.city.name;
          climateData.temp = data.list[0].main.temp.toFixed(1) + "°C";
          climateData.tempMin = data.list[0].main.temp_min.toFixed(1) + "°C";
          climateData.tempMax = data.list[0].main.temp_max.toFixed(1) + "°C";
      });
    return climateData
};
