const dateSon = new Date(2024, 3, 27, 23, 59, 59)?.getTime();

// extraire
//day  1 jour = 24h = 24h*60min = 24h*60min*60sec =86400s
//hour 1 h = 60min = 60*60sec = 3600s
//min 1 min = 60 sec
// 1 sec = 60 tierces
// 1 sec = 1000 ms

// 1 h = 24

function getDateSon() {
  const dateNow = Date?.now();
  const dateDif = (dateSon - dateNow) / 1000;

  const day = parseInt(dateDif / 86400);
  const day_dif = dateDif % 86400;
  const hour = parseInt(day_dif / 3600);
  const hour_dif = day_dif % 3600;
  const min = parseInt(hour_dif / 60);
  const sec = parseInt(hour_dif % 60);
  return {
    day,
    hour,
    min,
    sec,
  };
}

// setInterval(getDateSon, 1000);
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".countdown-item")?.forEach((item) => {
    item?.classList.add("show");
  });
  setInterval(() => {
    const { day, hour, min, sec } = getDateSon();
    document
      .querySelector(".days")
      .setAttribute("data-days", `${day?.toString()}j`);
    document
      .querySelector(".hours")
      .setAttribute("data-hours", `${hour?.toString()}h`);
    document
      .querySelector(".minutes")
      .setAttribute("data-minutes", `${min?.toString()}m`);
    document
      .querySelector(".seconds")
      .setAttribute("data-seconds", `${sec?.toString()}s`);
  }, 1000);
});
