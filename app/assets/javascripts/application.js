// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require onmount
//= require turbolinks
//= require parallax.min
//= require_tree .

$(document).on('ready show.bs closed.bs load page:change turbolinks:load', function () {
  $.onmount()
})

$.onmount('.parallax-window', function () {
  $('.parallax-mirror').remove();

  $(this).parallax({
    src: 'https://ddw2ppmkywo9u.cloudfront.net/sunset_cropped.jpg',
    bleed: 120,
    speed: 0.63
  });
})
