export const sunRiseFunc = (seconds: string): string => {
    let time: Date = new Date(+seconds * 1000);
    let hour: string = time.getHours() < 10 ? "0" + time.getHours() : time.getHours() + '';
    let minutes: string =
        time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes() + '';
    return hour + ":" + minutes;
}