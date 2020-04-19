let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let newMonths = [];
for (let index = 0; index < months.length; index++) {
  newMonths.unshift(months[index]);
}

console.log(newMonths);
