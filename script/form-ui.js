var count = 1;

$('#r1_slider').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#row_begin').val(ui.value);
    }
});

$('#row_begin').change(function () {
    var value = this.value.substring(1);
    $('#r1_slider').slider('value', parseInt(value));
});

$('#r2_slider').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#row_end').val(ui.value);
    }
});

$('#row_end').change(function () {
    var value = this.value.substring(1);
    $('#r2_slider').slider('value', parseInt(value));
});

$('#c1_slider').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#col_begin').val(ui.value);
    }
});

$('#col_begin').change(function () {
    var value = this.value.substring(1);
    $('#c1_slider').slider('value', parseInt(value));
});

$('#c2_slider').slider({
    range: "min",
    value: 0,
    min: -50,
    max: 50,
    step: 1,
    slide: function(event, ui) {
        $('#col_end').val(ui.value);
    }
});

$('#col_end').change(function () {
    var value = this.value.substring(1);
    $('#c2_slider').slider('value', parseInt(value));
});

var tabs = $('#tabs').tabs();

$('#submitButton').on('click', function () {
    $('#mult').each(function() {
        if (!($(this).hasClass('valid'))) {
            return;
        }
    });

    var ul = tabs.find('ul');
    var frags = tabs.find('#frags');

    $('<li><a href="#fragment-' + count + '"><span>Table '+ count +'</span></a></li>').appendTo(ul);
    count++;

    $('<div id=\"fragment-' + count + '\">' + $('#multTab').html() + '</div>').appendTo(frags);

    tabs.tabs('refresh');
});
