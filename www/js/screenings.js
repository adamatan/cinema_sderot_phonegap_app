// parse a date in yyyy-mm-dd-HH.MM format, e.g. 2013-11-18-21.00
function parseDate(input) { 
    var parts   = input.split('-');
    var year    = parts[0];
    var month   = parts[1]-1; // months are 0-based
    var day     = parts[2]; 
    var hours   = parts[3].split(".")[0];
    var minutes = parts[3].split(".")[1];
    
    return new Date(year, month, day, hours, minutes);
}

function createUniqueDivId(dateString, movieId) {
    var date = parseDate(dateString);
    return strftime('%Y%m%dT%H%M', date)+"M"+movieId;
}
