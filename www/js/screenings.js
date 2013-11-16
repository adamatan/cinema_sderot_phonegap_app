// parse a date in yyyy-mm-dd format
function parseDate(input) {
  var parts = input.split('-');
  // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
  var year  = parts[0];
  var month = parts[1]-1; // months are 0-based
  var day   = parts[2]; // months are 0-based
  return new Date(year, month, day)
}