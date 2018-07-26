var Excel = require("exceljs");
var workbook = new Excel.Workbook();

var filename = "";
var op = "";
workbook.xlsx.readFile(filename)
    .then(function() {
      workbook.xlsx.writeFile(op)
      .then(function() {
          
      });
    });