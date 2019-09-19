<script>
 
var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

//insert it via jquery
//$('#displayDate').html((newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear());

//or insert it via javascript
document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
  
	//-----------CTA STICKY RIGHT--------//
    // Add ID of sticky CTA
    var fixedCta = $('#lp-pom-box-1078');

    // DO NOT EDIT BELOW CODE  
    var ctaPos = fixedCta.offset();
    var ctaLeft = ctaPos.left;
    var ctaTop = ctaPos.top;

    var fixedOn = ctaTop;
      
    $(window).scroll(function () {
       if ($(this).scrollTop() > fixedOn) {
         fixedCta.css({
          'position' : 'fixed',
          'left': ctaLeft+'px',
          'top': (ctaTop - fixedOn)+'px'
         });
       } else if ($(this).scrollTop() < fixedOn) {
         fixedCta.css({
          'position' : 'absolute',
          'left': '638px',
          'top': (ctaTop)+'px'
         });
       }
    });

</script>