export const onUpdateClimateApi = (): boolean => {
  let date: Date = new Date();
  let times: string[] = [
    "03:10",
    "06:10",
    "09:10",
    "12:10",
    "15:10",
    "16:10",
    "20:10",
    "21:10",
    "00:10",
  ];
  let firstTime: string =
      (date.getHours() < 10
      ? "0" + date.getHours()
      : date.getHours()) + ":" + (date.getMinutes() < 10
        ? "0" + date.getMinutes()
        : date.getMinutes());
  return times.includes(firstTime)

};
