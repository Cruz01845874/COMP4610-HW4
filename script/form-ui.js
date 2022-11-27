var count = 1;

function saveTable() {
    var ul = tabs.find('ul');

    $('<li><a href="#fragment-' + count + '"><span>Table '+ count +'</span></a></li>').appendTo(ul);
    count++;

    // frags.append('<div id=\"fragment-' + count + '\">' + $('#multTab').html() + '</div>');
    $('#frags').append('<div id="fragment-' + count + '">' + $('#multTab').html() + '</div>');

    tabs.tabs('refresh');
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

$('#saveButton').on('click', function () {
    $('#mult').each(function() {
        if (!($(this).hasClass('valid'))) {
            return;
        }
    });
    saveTable();
    console.log("table created");
});
