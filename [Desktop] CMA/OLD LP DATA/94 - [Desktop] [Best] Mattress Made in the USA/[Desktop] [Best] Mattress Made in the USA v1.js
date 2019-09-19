<script>
  
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', '321_mattress_made_in_the_usa_v1');
  
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