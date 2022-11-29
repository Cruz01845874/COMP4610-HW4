// File: form-validation.js
// GUI Assignment: HW4a Using the jQuery Plugin
// Copyright (c) 2022 by Roberto. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Roberto Cruz on 11/28/22

$(document).ready(function() {
    
    // Multiplication table validation form
    // Rules: 
    //  Must be a negative or positive integer (no floating point numbers or strings)
    //  Must be in the range [-50, 50]
    //  A starting number cannot be greater than its end number (no reverse tables) and vice versa. 
    $('#mult').validate({

        rules: {
            row_begin: {
                integer: true,
                range: [-50, 50],
                lessThanEqual: '#row_end'
            },
            
            row_end: {
                integer: true,
                range: [-50, 50],
                greaterThanEqual: '#row_begin'
            },

            col_begin: {
                integer: true,
                range: [-50, 50],
                lessThanEqual: '#col_end'
            },

            col_end: {
                integer: true,
                range: [-50, 50],
                greaterThanEqual: '#col_begin'
            },
        },

        messages: {
            row_begin: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                lessThanEqual: "The starting row number must be less than the end."
            },

            row_end: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                greaterThanEqual: "The ending row number must be greater than the start."
            },

            col_begin: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                lessThanEqual: "The starting column number must be less than the end."
            },

            col_end: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                greaterThanEqual: "The ending column number must be greater than the start."
            }
        }
    })

    // Table is created only if form is valid.
    // valid() method checks validity.
    $('#submitButton').on('click', function () {
        $('#mult').valid();
    });
})