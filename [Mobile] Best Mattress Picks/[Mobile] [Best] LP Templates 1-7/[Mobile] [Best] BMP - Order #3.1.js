<script>

/**Fixed Fader Nav**/

//Replace ID below with your own box ID
var boxToAppend = '#lp-pom-box-4397';
//Choose pixel height of when menu fades in. Use the height of a page section like this: $("#lp-pom-block-93").height();
var showHeight = 30; 

//Set to 'header' or 'footer'
var headerOrFooter = 'header';

var backgroundCSS = {"position":"fixed", "left":"0", "top":"0px", "bottom":"auto", "width":"100%", "z-index":"899"};
var colorOverlayCSS = {"position":"fixed", "left":"0", "top":"0px", "bottom":"auto", "width":"100%", "z-index":"auto", "border-style":"none none none none"};
var childrenCSS = {"position":"fixed", "left":"auto", "top":"0px", "bottom":"auto", "width":"100%", "z-index":"999", "border-style":"none none none none", "border-width":"0px", "background":"none"};
  if (headerOrFooter === 'footer') {
    backgroundCSS["top"] = 'auto';
    backgroundCSS["bottom"] = '0px';
    colorOverlayCSS["top"] = 'auto';
    colorOverlayCSS["bottom"] = '0px';
    childrenCSS["top"] = 'auto';
    childrenCSS["bottom"] = '0px';
  }
  var boxParent = $(boxToAppend).parent();
  var boxClone = $(boxToAppend).clone()

  boxClone.appendTo(boxParent).css(backgroundCSS).children().remove();
  $(boxToAppend).css(childrenCSS);
  $(boxToAppend + '-color-overlay').appendTo(boxClone).css(colorOverlayCSS);
      
var bothBoxes = boxToAppend + ', ' + boxToAppend + '-color-overlay';
$(window).scroll( function() {
  if ($(this).scrollTop() > showHeight) {
    $(bothBoxes).fadeIn();
  } else {
    $(bothBoxes).fadeOut();
  }
});
  
var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
  
</script>