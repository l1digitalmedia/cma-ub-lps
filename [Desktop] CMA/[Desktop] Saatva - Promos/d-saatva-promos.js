<script type="text/javascript">
var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

//insert it via jquery
$('#displayDate').html((newDate.getMonth() - 3) + '/' + newDate.getDate() + '/' + newDate.getFullYear());

//or insert it via javascript
document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();

</script>