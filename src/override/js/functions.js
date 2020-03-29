/* get login */
var modal = document.getElementById('idlogin-btn');

/* close login */
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
