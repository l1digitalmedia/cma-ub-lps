/*-----
dyn.date
-----*/
<script>var newDate=new Date;newDate.setDate(newDate.getDate()-3),document.getElementById("displayDate").innerHTML=newDate.getMonth()+1+"/"+newDate.getDate()+"/"+newDate.getFullYear();</script>
<script>var newDate=new Date;newDate.setDate(newDate.getDate()-3),document.getElementById("displayDateM").innerHTML=newDate.getMonth()+1+"/"+newDate.getDate()+"/"+newDate.getFullYear();</script>


/*-----
Shadows
-----*/
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"></script>
<script>
window.onload = function() {
$('.lp-pom-box').each(function() {  if (parseInt($(this).width()) >= 290) {
   this.style.boxShadow = "2px 4px 14px -8px rgba(1, 31, 75, 0.95)";
}
});
  $("#lp-pom-button-4829").hover(function(){
      $("#lp-pom-box-5774").css("opacity", 1);
      $("#lp-pom-text-5775").css("opacity", 1);
      }, function(){
        $("#lp-pom-box-5774").css("opacity", 0);
        $("#lp-pom-text-5775").css("opacity", 0);
	});
  document.getElementById("lp-pom-box-5778").style.boxShadow = "0px 0px 27px -4px rgba(255,149,0,1)";
  document.getElementById("lp-pom-box-6049").style.boxShadow = "0px 0px 27px -4px rgba(255,149,0,1)";
  document.getElementById("lp-pom-box-6273").style.boxShadow = "0px 0px 27px -4px rgba(255,149,0,1)";
}
</script>


/*-----
popup
-----*/
<script src="https://473ec154150b48ba99b2206288c413c5.js.ubembed.com" async></script>