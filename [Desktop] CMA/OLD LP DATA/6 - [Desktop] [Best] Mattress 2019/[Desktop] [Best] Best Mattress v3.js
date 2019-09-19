<script>
  
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'best_mattress_v3');
  
var newDate = new Date();
newDate.setDate(newDate.getDate() - 3);

//insert it via jquery
//$('#displayDate').html((newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear());

//or insert it via javascript
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