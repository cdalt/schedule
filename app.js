let schedule = {};
let dayOfWeek = document.getElementById("currentDay");
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
window.onload = function () {
  let timeOfDay = new Date();

  makeFunction();
  dayOfWeek.textContent =
    weekDays[new Date().getDay()] +
    ", " +
    months[timeOfDay.getMonth()] +
    " " +
    timeOfDay.getDate() +
    " ";
};
function makeFunction() {
  let storageSchedule = JSON.parse(localStorage.getItem("schedule"));
  console.log(storageSchedule);
  for (i = 9; i < 18; i++) {
    console.log(i);
    let row = document.createElement("div");
    let colone = document.createElement("div");
    let colten = document.createElement("div");
    let coltwo = document.createElement("div");
    row.setAttribute("class", "row time-block");
    if (new Date().getHours() === i) {
      colten.setAttribute("class", "col-10 present");
    } else if (new Date().getHours() < i) {
      colten.setAttribute("class", "col-10 past");
    } else {
      colten.setAttribute("class", "col-10 future");
    }
    colone.setAttribute("class", "col-1");

    coltwo.setAttribute("class", "col-1");
    colone.textContent = i + ":" + "00";
    if (storageSchedule === null) {
      schedule[i + ":" + "00"] = "";
    } else {
      schedule[i + ":" + "00"] = storageSchedule[i + ":" + "00"];
    }

    row.appendChild(colone);
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.value = schedule[i + ":" + "00"];
    colten.appendChild(input);
    row.appendChild(colten);
    let button = document.createElement("button");
    button.textContent = "Submit";
    button.setAttribute("class", "saveBtn");
    button.setAttribute("data-block", i + ":00");
    button.addEventListener("click", function (e) {
      schedule[button.getAttribute("data-block")] = input.value;
      console.log(schedule);
      saveSchedule();
    });

    coltwo.appendChild(button);
    row.appendChild(coltwo);
    document.getElementById("contain").appendChild(row);
  }
}
function saveSchedule() {
  localStorage.setItem("schedule", JSON.stringify(schedule));
}
// window.localStorage
// $("saveBtn").on("click", function (e) {
//   const val = $(this)("input")[0].value;
//   console.log(val);
// });
