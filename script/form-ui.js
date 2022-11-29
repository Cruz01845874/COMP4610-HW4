// File: form-ui.js
// GUI Assignment: HW4 Using the jQuery Plugin/UI with Your Dynamic Table
// Copyright (c) 2022 by Roberto. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by Roberto Cruz on 11/29/22

// keep count of tabs for ID naming when added
var count = 2;

// keep count of tabs for deleting
var totalTabs = 1;

// maximum amount of tables allowed to be saved
var maxTables = 31;

$(document).ready(function() {
    function saveTable() {
        var ul = tabs.find('ul');
        var newTable = $('#multTab').html();

        // tab name: [row_begin, row_end] x [col_begin, col_end]
        var tableName = "[" + $('#row_begin').val() + "," + $('#row_end').val()+ "] &#215; [" + $('#col_begin').val() + "," + $("#col_end").val() + "]";

        // checkbox at top right of each tab for multiple deleting
        var checkBox = '<input type="checkbox" name="fragment-' + count + '">';

        // add table fragment to the tab div
        $('<li><a href="#fragment-' + count + '"><span>'+ tableName +'</span></a>' + checkBox + '</li>').appendTo(ul);
        $('#frags').append('<div id="fragment-' + count + '">' + newTable + '</div>');

        count++;
        totalTabs++;

        tabs.tabs('refresh');

        // when a new tab is added, automatically switch to it
        $("#tabs").tabs("option", "active", count);
    }

    // note: same for every slider and text input
    // slider allows for numbers in the range [-50, 50]
    // when strings are put in the text box, slider cannot move
    $('#r1_slider').slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        step: 1,

        // every time slider is updated, table is as well
        slide: function(event, ui) {
            $('#row_begin').val(ui.value);
            $('#submitButton').trigger('click');
        }
    });

    // slider moves based on text input as well
    $('#row_begin').change(function () {
        var value = this.value;
        $('#r1_slider').slider('value', parseInt(value));

        selector = $('#' + this.id.split('_'[0]));
        selector.slider('value', value);
        
        // will also update dynamically based on text input
        $('#submitButton').trigger('click');
    });

    $('#r2_slider').slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $('#row_end').val(ui.value);
            $('#submitButton').trigger('click');
        }
    });

    $('#row_end').change(function () {
        var value = this.value;
        $('#r2_slider').slider('value', parseInt(value));

        selector = $('#' + this.id.split('_'[0]));
        selector.slider('value', value);
        $('#submitButton').trigger('click');
    });

    $('#c1_slider').slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $('#col_begin').val(ui.value);
            $('#submitButton').trigger('click');
        }
    });

    $('#col_begin').change(function () {
        var value = this.value;
        $('#c1_slider').slider('value', parseInt(value));

        selector = $('#' + this.id.split('_'[0]));
        selector.slider('value', value);
        $('#submitButton').trigger('click');
    });

    $('#c2_slider').slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $('#col_end').val(ui.value);
            $('#submitButton').trigger('click');
        }
    });

    $('#col_end').change(function () {
        var value = this.value;
        $('#c2_slider').slider('value', parseInt(value));
        
        selector = $('#' + this.id.split('_'[0]));
        selector.slider('value', value);
        $('#submitButton').trigger('click');
    });

    // initialize tabs
    var tabs = $('#tabs').tabs();

    // may only save if the form is valid
    $('#saveButton').on('click', function () {
        if (!($('#mult').valid())) {
            return;
        }
        saveTable();
        console.log("table created");
    });

    $('#deleteButton').on('click', function() {

        var currentIndex = $('#tabs').tabs('option', 'active');
        var tabItems = $('#tabs').find('li');
        console.log('delete button clicked');

        // deletes the active tab
        if ($('li').is(".ui-state-active")) {
            $(".ui-state-active").remove();
            $("#tabs").tabs("option", "active", currentIndex - 1);
            totalTabs--;
            console.log("Tab removed");
        }

        // deletes each tab that is checked
        tabItems.each(function() {
            if ($('input[type="checkbox"]').prop("checked") === true) {
                $('li').remove();
                console.log('is checked');
            }
        });
    })
})