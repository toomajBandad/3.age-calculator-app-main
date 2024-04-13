const DayInput = document.querySelector("#Day-input");
const MonthInput = document.querySelector("#Month-input");
const YearInput = document.querySelector("#Year-input");

const resultYears = document.querySelector("#result-years");
const resultMonths = document.querySelector("#result-months");
const resultDays = document.querySelector("#result-days");

const dayHelp = document.querySelector("#dayHelp");
const monthlHelp = document.querySelector("#monthlHelp");
const yearHelp = document.querySelector("#yearHelp");

const dayLabel = document.querySelector("#day-label");
const monthLabel = document.querySelector("#month-label");
const yearLabel = document.querySelector("#year-label");

var newDate;
var newYear;
var newMonth;
var newDay;

function submitForm(event) {
  event.preventDefault();

  dayHelp.classList.add("d-none");
  DayInput.style.borderColor = "gainsboro";
  dayLabel.style.color = "grey";

  monthlHelp.classList.add("d-none");
  MonthInput.style.borderColor = "gainsboro";
  monthLabel.style.color = "grey";

  yearHelp.classList.add("d-none");
  YearInput.style.borderColor = "gainsboro";
  yearLabel.style.color = "grey";

  !(DayInput.value < 32) || DayInput.value == 0
    ? (dayHelp.classList.remove("d-none"),
      (DayInput.style.borderColor = "pink"),
      (dayLabel.style.color = "red"))
    : dayHelp.classList.add("d-none");

  !(MonthInput.value < 13) || MonthInput.value == 0
    ? (monthlHelp.classList.remove("d-none"),
      (MonthInput.style.borderColor = "pink"),
      (monthLabel.style.color = "red"))
    : monthlHelp.classList.add("d-none");

  !(YearInput.value > 1920 && YearInput.value < 2025)
    ? (yearHelp.classList.remove("d-none"),
      (YearInput.style.borderColor = "pink"),
      (yearLabel.style.color = "red"))
    : yearHelp.classList.add("d-none");

  if (
    DayInput.value > 31 ||
    MonthInput.value > 12 ||
    YearInput.value < 1920 ||
    DayInput.value == 0 ||
    MonthInput.value == 0 ||
    YearInput.value == 0
  ) {
    alert("Please input valid data");
    clearvalues();
  } else {
    AgeCalculator(YearInput.value, MonthInput.value, DayInput.value);
  }
}

function AgeCalculator(birthYear, birthMonth, birthDay) {
  const february =
    (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0
      ? 29
      : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  newDate = new Date();
  newYear = newDate.getFullYear();
  newMonth = newDate.getMonth();
  newDay = newDate.getDate();
  console.log(newYear, newMonth, newDay);
  let yearDiff = newYear - birthYear;
  let monthDiff = newMonth - birthMonth;
  let dayDiff = newDay - birthDay;

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[birthMonth];
  }
  resultYears.innerText = yearDiff;
  resultMonths.innerText = monthDiff;
  resultDays.innerText = dayDiff;
}
function clearInput() {
  DayInput.value = "";
  MonthInput.value = "";
  YearInput.value = "";
}
function clearvalues() {
  resultYears.innerText = "--";
  resultMonths.innerText = "--";
  resultDays.innerText = "--";
}
