// File: script.js
// GUI Assignment: HW3 Creating an Interactive Dynamic Table
// Copyright (c) 2022 by Roberto. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Roberto Cruz on 10/30/22

var row_begin, row_end, col_begin, col_end;

function createTable(row_begin, row_end, col_begin, col_end) {
    var output = "<table><th class=\"x\">&#215;</th>";
    var i, j;

    // casts to number type (string error checking in checkArgs())
    row_begin = Number(document.getElementById('row_begin').value);
    row_end   = Number(document.getElementById('row_end').value);
    col_begin = Number(document.getElementById('col_begin').value);
    col_end   = Number(document.getElementById('col_end').value);

    // Checks arguments first before creating the table.
    // If false, returns without drawing a table.
    if (checkArgs(row_begin, row_end, col_begin, col_end)) {
        // row header
        for (i = row_begin; i <= row_end; i++) {
            output += "<th>" + i + "</th>";
        }
    
        // column header and all rows are printed
        for (i = col_begin; i <= col_end; i++) {
            output += "<tr>";
            output += "<th>" + i + "</th>";
    
            for (j = row_begin; j <= row_end; j++) {
                
                // perfect squares are highlighted
                if (i == j) {
                    output = output + "<td style=\"background-color: #0036ac;\"><span>" + (i * j) + "</span></td>";
                }

                else {
                    output = output + "<td>" + (i * j) + "</td>";
                }
            }
            output += "</tr>";
        }
        output += "</table>";
        document.getElementById('multTab').innerHTML = output;
    }
}

// Error checking function checks four cases:
// 1. If the values are strings with isFinite()
// 2. If the values are integers
// 3. If the numbers exceed the allowed values ([-50, 50])
// 4. If the starting values for the rows or columns are greater than its end values
// On returning true, the table is created.
function checkArgs(r1, r2, c1, c2) {
    // var message = "<p>";
    var values = [r1, r2, c1, c2];
    var i;

    // string checker: isFinite() will return true if a number, false if a string
    for (i = 0; i < values.length; i++) {
        if (!isFinite(values[i])) {
            // message += "Please only enter numbers."
            // document.getElementById("error").innerHTML = message + "</p>";
            return false;
        } 

        // integer checker: returns false if not an integer
        else if (!Number.isInteger(values[i])) {
            // message += "Please only enter integer numbers.";
            // document.getElementById("error").innerHTML = message + "</p>";
            return false;
        }
    }

    if (r1 < -50 || r2 > 50 || c1 < -50 || c2 > 50) {
        // message += "Please enter a number between -50 and 50."
        // document.getElementById("error").innerHTML = message + "</p>";
        return false;
    }

    // cannot create a reverse table
    if (r1 > r2 || c1 > c2) {
        // message += "A starting number can't be greater than the ending number.";
        // document.getElementById("error").innerHTML = message + "</p>";
        return false;
    }

    // document.getElementById("error").innerHTML = "";
    return true;
}
