const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

function countHours(year, holidays) {
  let hours = 0;
  let day;

  holidays.forEach((holiday) => {
    day = `${year}/${holiday}`;
    const date = new Date(day);
    if (date.getDay() != 0 && date.getDay() != 6) {
      hours = hours + 2;
    }
  });

  return hours;
}

countHours(year, holidays); // 2 días -> 4 horas extra en el año
