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
          'left': '1011px',
          'top': (ctaTop)+'px'
         });
       }
    });
  
  	//------------STICKY CTA LEFT-----------//
    // Add ID of sticky CTA
    var fixedCta2 = $('#lp-pom-box-2140');

    // DO NOT EDIT BELOW CODE  
    var ctaPos2 = fixedCta2.offset();
    var ctaLeft2 = ctaPos2.left;
    var ctaTop2 = ctaPos2.top;

    var fixedOn = ctaTop2;
      
    $(window).scroll(function () {
       if ($(this).scrollTop() > fixedOn) {
         fixedCta2.css({
          'position' : 'fixed',
          'left': ctaLeft2 +'px',
          'top': (ctaTop2 - fixedOn)+'px'
         });
       } else if ($(this).scrollTop() < fixedOn) {
         fixedCta2.css({
          'position' : 'absolute',
          'left': '181px',
          'top': (ctaTop2)+'px'
         });
       }
    });
</script>  