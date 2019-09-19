<script>

/**Fixed Fader Nav**/

//Replace ID below with your own box ID
var boxToAppend = '#lp-pom-box-3461';
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

(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:1273451,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.defer=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r)})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')

window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', '1_mobile_best_lower_back_pain_v1_new');
  
var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
  
var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

</script>