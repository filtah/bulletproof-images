//Polyfill
(function() {
  
  if ("objectFit" in document.documentElement.style === false) {
    
    //console.log("no object fit");
  
    var bps = document.querySelectorAll(".bp");
    if (bps) {
      bps.forEach(function(bp) {

        //only modify if has img tag as immediate child..
        var children = bp.childNodes;
        children.forEach(function(img) {
          if (img.tagName === "IMG") {

            //hide image..
            img.style.opacity = 0;

            //copy img url to container background..
            bp.style.background = "url('" + img.src + "')";

            //set additional style attributes..
            bp.style.backgroundSize = 'cover';
            bp.style.backgroundRepeat = 'no-repeat';
            bp.style.backgroundPosition = 'center center'; 
            bp.style.backgroundOrigin = 'content-box';
          }
        });
      });
    }
  }
})();
