$(document).ready(function () {
    var fv = $("#fullview").fullView({
      //Navigation
      dots: true,
      dotsPosition: "right",
      dotsTooltips: true,
  
      //Scrolling
      easing: "swing",
      backToTop: true,
  
      // Accessibility
      keyboardScrolling: true,
  
      // Callback
      onScrollEnd: function (currentView, preView) {
        console.log("Current", currentView);
        console.log("Previus", preView);
      }
    });