export interface I_ClimateData {
    country: string,
    temp: string,
    tempMax: string,
    tempMin: string,
    sunInput: string,
    sunOutput: string,
    conditions: string,
    wind: string,
    fullDayClimate: I_FullDayClimate[],
}
export interface I_FullDayClimate {
    time: string,
    temp: string,
    tempMax: string,
    icon: string,
}
export interface I_ClimateState {
    climateData: I_ClimateData | {}
}