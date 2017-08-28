//Polyfill
(function() {

  function hasClass(element, cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  function doBackgrounds(bp, child) {

        //hide image..
        child.style.opacity = 0;

        //copy child url to container background..
        bp.style.background = "url('" + child.src + "')";

        //set additional style attributes..
        bp.style.backgroundSize = 'cover';
        bp.style.backgroundRepeat = 'no-repeat';
        bp.style.backgroundPosition = 'center center'; 
        bp.style.backgroundOrigin = 'content-box';

        if ( hasClass(bp, 'bp-contain') ) {
          bp.style.backgroundSize = 'contain';
        }

  }

  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
  
  
  if ("objectFit" in document.documentElement.style === false) {
    
    console.log("no object fit");
  
    var bps = document.querySelectorAll(".bp");
    if (bps) {
      bps.forEach(function(bp) {

        //only modify if has img tag as immediate child..
        var children = bp.childNodes;
        children.forEach(function(ch1) {
          if (ch1.tagName === "IMG") {

            doBackgrounds(bp, ch1);

          }

          if (ch1.tagName === 'A') {

            var grandChildren = ch1.childNodes;
            grandChildren.forEach(function(ch2) {

              if (ch2.tagName === "IMG") {

                doBackgrounds(bp, ch2);
              }

            });


          }
        });
      });
    }
  }
})();
