import type {I_FullDayClimate} from "~/models/store/climate/interfaces";

export const fullDayClimate = (days: any): I_FullDayClimate[] => {
    let firstDate: Date = new Date()
    let year: number = firstDate.getFullYear()
    let month: string = firstDate.getMonth() + 1 < 10 ? '0' + (firstDate.getMonth()+1) : firstDate.getMonth() + ''
    let day: string = firstDate.getDate() < 10 ? '0' + firstDate.getDate() : firstDate.getDate() + ''
    let date: string = year + '-' + month + '-' + day
    let filteredDays = days.filter((item: any) => item.dt_txt.split(' ')[0] === date)
    return filteredDays.map((item: any) => {
        return {
            time: item.dt_txt.split(' ')[1].slice(0,5),
            temp: item.main.temp.toFixed(1) + "°C",
            tempMax: item.main.temp_max.toFixed(1) + "°C",
            icon: item.weather[0].icon
        }
    })
}