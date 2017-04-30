//Polyfill (requires jQuery)
(function($) {
  if ("objectFit" in document.documentElement.style === false) {
    console.log("no object fit");

    var $containers = $(".bp");

    $containers.each(function() {
      
      var $container = $(this);
      var $img = $container.find("> img");
      var url = $img.attr("src");

      $img.css("opacity", "0");
      $container.css("background", "url('" + url + "')");
      $container.css("background-size", "cover");
      $container.css("background-origin", "content-box");
      $container.css("background-repeat", "no-repeat");
      $container.css("background-position", "center center");
    });
  }
})(jQuery);
