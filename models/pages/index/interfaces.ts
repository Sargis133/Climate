import type {I_ClimateData} from "~/models/store/climate/interfaces";

export interface I_MainData {
    timeData: I_FirstDate,
    climateData: I_ClimateData,
}
export interface I_FirstDate {
    time: string,
    date: string,
}