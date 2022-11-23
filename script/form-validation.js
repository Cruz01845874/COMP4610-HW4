$().ready(function() {
    $('#mult').validate({
        onkeyup: false,

        rules: {
            row_begin: {
                required: true,
                integer: true,
                range: [-51, 51],
                lessThan: '#row_end',
            },
            
            row_end: {
                required: true,
                integer: true,
                range: [-51, 51],
                greaterThan: '#row_begin'
            },

            col_begin: {
                required: true,
                integer: true,
                range: [-51, 51],
                lessThan: '#col_end'
            },

            col_end: {
                required: true,
                integer: true,
                range: [-51, 51],
                greaterThan: '#col_begin'
            },
        },

        messages: {
            row_begin: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                lessThan: "The starting row number must be less than the end."
            },

            row_end: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                greaterThan: "The ending row number must be greater than the start."
            },

            col_begin: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                lessThan: "The starting column number must be less than the end."
            },

            col_end: {
                required: "Please enter a number.",
                integer: "Please only enter whole numbers.",
                range: "Numbers can only be between -50 and 50, inclusive.",
                lessThan: "The ending column number must be greaer than the start."
            }
        }
    })
})