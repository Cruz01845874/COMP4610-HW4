var count = 2;
var totalTabs = 1;
var maxTables = 31;

$(document).ready(function() {
    function saveTable() {
        var ul = tabs.find('ul');
        var newTable = $('#multTab').html();
        var tableName = "[" + $('#row_begin').val() + "," + $('#row_end').val()+ "] &#215; [" + $('#col_begin').val() + "," + $("#col_end").val() + "]";
        var checkBox = '<input type="checkbox" name="fragment-' + count + '">';

        if (count > maxTables) {
            $('#tablesMsg').css({
                "display" : "inline",
                "line-height" : "1.5em"
            });
            return;
        }

        $('<li><a href="#fragment-' + count + '"><span>'+ tableName +'</span></a>' + checkBox + '</li>').appendTo(ul);
        $('#frags').append('<div id="fragment-' + count + '">' + newTable + '</div>');

        count++;
        totalTabs++;

        tabs.tabs('refresh');

        $("#tabs").tabs("option", "active", count);
    }

    $('#r1_slider').slider({
        range: "min",
        value: 0,
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $('#row_begin').val(ui.value);
            $('#submitButton').trigger('click');
        }
    });

    $('#row_begin').change(function () {
        var value = this.value;
        $('#r1_slider').slider('value', parseInt(value));

        selector = $('#' + this.id.split('_'[0]));
        selector.slider('value', value);
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

    var tabs = $('#tabs').tabs();

    $('#tabs').tabs({
        activate: function(event, ui) {
            $('#delete').on('click', function() {
                $(this).remove();
            })
        }
    });

    tabs.on("span.ui-icon-close", "click", function() {
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        tabs.tabs("refresh");
    });

    $('#saveButton').on('click', function () {
        if (!($('#mult').valid())) {
            return;
        }
        saveTable();
        console.log("table created");
    });

    // && !($('li').hasClass('exampleTab'))

    $('#deleteButton').on('click', function() {

        var currentIndex = $('#tabs').tabs('option', 'active');
        console.log('delete button clicked');

        if ($('li').is(".ui-state-active")) {
            $(".ui-state-active").remove();
            $("#tabs").tabs("option", "active", currentIndex - 1);
            totalTabs--;
            console.log("Tab removed");
        }

        // $('#tabs li').each(function() {
        //     if ($(this).is(":checked")) {
        //         $(this).remove();
        //     }
        // });

        var $checkedNum = $('input[name="fragment-' + count + '"]:checked');

        $checkedNum.each(function(){
            $(this).remove();
        })
    })
})

