export const onUpdateClimateApi = () => {
  let date = new Date();
  let times = [
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
  let firstTime =
      (date.getHours() < 10
      ? "0" + date.getHours()
      : date.getHours()) + ":" + (date.getMinutes() < 10
        ? "0" + date.getMinutes()
        : date.getMinutes());
  if(times.includes(firstTime)) return true
};
