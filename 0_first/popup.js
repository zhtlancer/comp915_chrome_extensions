var d = new Date();

var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

day = (day < 10) ? "0" + day : day;
month = (month < 10) ? "0" + month : month;

document.write(day + "-" + month + "-" + year)