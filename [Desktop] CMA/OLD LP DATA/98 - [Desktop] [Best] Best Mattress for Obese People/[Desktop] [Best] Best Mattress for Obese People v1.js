<script>

var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
  
</script>