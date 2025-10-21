function leapyear(year) {
  if (year % 400 == 0 && year % 100 == 0) {
    return "leap year";
  } else {
    return "Not leap year";
  }
}
const y = leapyear(2001);
console.log(y);
