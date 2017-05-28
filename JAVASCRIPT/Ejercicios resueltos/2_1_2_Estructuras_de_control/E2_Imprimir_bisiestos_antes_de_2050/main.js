// Imprime todos los años bisiestos que habrá antes de 2050

var leapYearInterval = 4;
var currentYear = 2017;
var givenYear = 2050;
var nextLeapYear = currentYear + leapYearInterval - currentYear % leapYearInterval;

for (var year = nextLeapYear; year < givenYear; year = year + leapYearInterval) {
  console.log(year);
}
