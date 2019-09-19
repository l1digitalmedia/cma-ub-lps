<script type="text/javascript">

var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
  
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