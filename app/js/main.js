const {
  on
} = require("gulp");

$(function () {

  $('.rate-star').rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false

  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });


  var mixer = mixitup('.products__inner-box');

});