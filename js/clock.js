const clock = document.querySelector("#clock");

const getTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `현재 시각 \n ${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
