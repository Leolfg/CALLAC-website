// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.organise'
});

// store filter for each group
var filters = {};

$('.filters').on('click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[filterGroup] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues(filters);
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// unwrap long description and re-arrange masonry grid

$('.unwrap').click(function(event) {
    var $button = $(event.target);
    var $description = $button.next('.longue-description').first();

    $description.slideToggle(function() {
        var hidden = $description.css('display') === 'none';

        $button.text(hidden ? 'Plus' : 'Moins');
        $('.grid').masonry();
    });
});

// flatten object by concatting values
function concatValues(obj) {
    var value = '';
    for (var prop in obj) {
        value += obj[prop];
    }
    return value;
}

// overlay nav




$('.trier').click(function(event) {
  var $button = $(event.target);
  var $buttonGroup = $button.next('.button-group').first();

  $buttonGroup.slideToggle();
  var hidden = $buttonGroup.css('display') === 'none';
});

$().click(function(event) {
  var $button = $(event.target);
  var $buttonGroup = $button.next('.button-group').first();

  $buttonGroup.slideToggle();

});



