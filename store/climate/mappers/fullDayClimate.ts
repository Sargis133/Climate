export const fullDayClimate = (days: any) => {
    let firstDate: Date = new Date()
    let year = firstDate.getFullYear()
    let month = firstDate.getMonth() + 1 < 10 ? '0' + (firstDate.getMonth()+1) : firstDate.getMonth()
    let day = firstDate.getDate() < 10 ? '0' + firstDate.getDate() : firstDate.getDate()
    let date = year + '-' + month + '-' + day
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