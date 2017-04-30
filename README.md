# bulletproof-images
HTML Images which always behave, regardless of their dimensions.

Bulletproof images is a micro css library which allows you to use any size image and have it fit to any aspect ratio you give it. The image also rezises to it's parent, so is fully responsive.

The magic behind this comes from a new css property: "object-fit".
This basically makes an image behave like a background image when using the property "background-size: cover".

This works great in most modern browsers except IE and Edge.
For this, I've created a polyfill which you just need to include.
The standard script is vanilla js, very fast and should work fine.

I've included the original code too, which requires jQuery as a dependancy, and should be more compatible if you have problems with the former.

Demo: https://codepen.io/filtah/pen/EmmmJQ
