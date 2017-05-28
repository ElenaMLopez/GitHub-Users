// Calcula los años bisiestos que habrá antes de 2050

var leapYearInterval = 4;
var currentYear = 2017;
var givenYear = 2050;
var targetYear = givenYear - 1;

var targetLeapYear = targetYear - targetYear % leapYearInterval;
var lastLeapYear = currentYear - currentYear;

var result = (targetLeapYear - lastLeapYear) / leapYearInterval;

console.log('Habrá ' + result + ' años bisiestos antes de ' + givenYear);
