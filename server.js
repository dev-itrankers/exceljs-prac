const Excel = require("exceljs");
const path = require("path");
const fs = require("fs");

var filename = path.join(__dirname,"policy-format.xls");

var workbook = new Excel.Workbook();
workbook.xlsx.readFile("policy-formats.xlsx")
    .then(function() {
      var worksheet = workbook.getWorksheet(1);
      var row = worksheet.getRow(5);
      row.getCell(1).value = 5; // A5's value set to 5
      row.commit();
      return workbook.xlsx.writeFile('new.xlsx');
    });
 