$(function () {
  setTimeout(flash, 2000);
});

var flash = function () {
  var states  = $('#brazil-map .statelybrazil-state').length - 1;
  var random  = Math.round(Math.random()*states);
  var color   = Math.round(Math.random()*5);

  var flashedElement      = $("#brazil-map .statelybrazil-state").eq(random);
  var flashedStateName    = flashedElement.data('state-name');
  var flashedStateAcronym = flashedElement.data('state-acronym');
  var flashedText         = flashedStateName + ' (' + flashedStateAcronym + ')';

  flashedElement.css('color', 'rgba(63,64,149,.'+(color+2)+')');
  $('#flash-text').text(flashedText);
  setTimeout(flash, 2000);
}
