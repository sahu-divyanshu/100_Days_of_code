const eventContainer = document.querySelector(".event-container");
const formContainer = document.querySelector(".form-container");

//event selector
const dayTitle = document.querySelector("#day-title");
const dayName = document.querySelector(".day-name");

const hourTitle = document.querySelector("#hour-title");
const hourName = document.querySelector(".hour-name");

const minuteTitle = document.querySelector("#minute-title");
const minuteName = document.querySelector(".minute-name");

const secondTitle = document.querySelector("#second-title");
const secondName = document.querySelector(".second-name");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let countdownTimer;

function addHiddenClass(element) {
  element.classList.add("hidden");
}
function removeHiddenClass(element) {
  element.classList.remove("hidden");
}

function checkLocalStorage() {
  if (
    (localStorage.getItem("eventTracker.event") === "",
    localStorage.getItem("eventTracker.event") === "[]")
  ) {
    showForm();
  } else {
    const event = JSON.parse(localStorage.getItem("eventTracker.event"));
    showEvent(event.title, event.date);
  }
}

function deleteEventFromLocalStorage() {
  localStorage.setItem("eventTracker.event", "[]");
}
function saveEventToLocalStorage(title, date) {
  const event = {
    title,
    date,
  };
  localStorage.setItem("eventTracker.event", JSON.stringify(event));
}

function startCountdownTimer(title, date) {
  const eventTitle = document.querySelector(".event-title");
  eventTitle.textContent = title;
  updateCountdown(date);
  countdownTimer = setInterval(() => {
    updateCountdown(date);
  }, 1000);
}

function updateCountdown(date) {
  const currentTime = new Date().getTime();
  const countdownTime = date - currentTime;

  const newDay = Math.floor(countdownTime / day);
  const newHour = Math.floor((countdownTime % day) / hour);
  const newMinute = Math.floor((countdownTime % hour) / minute);
  const newSecond = Math.floor((countdownTime % minute) / second);

  // Update Event
  dayTitle.textContent = newDay;
  hourTitle.textContent = newHour;
  minuteTitle.textContent = newMinute;
  secondTitle.textContent = newSecond;


}

function showForm() {
  removeHiddenClass(formContainer);
  addHiddenClass(eventContainer);
  deleteEventFromLocalStorage();
  const title = document.querySelector("#title");
  title.focus();
}
function showEvent(title, event) {
  saveEventToLocalStorage(title, event);
  startCountdownTimer(title, event);
  removeHiddenClass(eventContainer);
  addHiddenClass(formContainer);
}
//Event Listners submit form

const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const eventInput = document.querySelector("#event");
  const event = new Date(eventInput.value).getTime();

  if (title.value === "" || eventInput.value === "") {
    return alert("Please Enter a Title and a Date");
  }
  showEvent(title.value, event);
  title.value = "";
  eventInput.value = "";
});

const eventBtn = document
  .querySelector(".event-btn")
  .addEventListener("click", showForm);

window.addEventListener("DOMContentLoaded", checkLocalStorage);
