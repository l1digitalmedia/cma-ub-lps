<script>
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
          'left': '881px',
          'top': (ctaTop)+'px'
         });
       }
    });
</script>  

<script type="text/javascript">
var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

//insert it via jquery
$('#displayDate').html((newDate.getMonth() - 3) + '/' + newDate.getDate() + '/' + newDate.getFullYear());

//or insert it via javascript
document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();

</script>