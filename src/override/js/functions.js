/* get login */
var modal = document.getElementById('idlogin-btn');
document.getElementById('createAnAccount').addEventListener("click", createAnAccount);
document.getElementById('loginAccount').addEventListener("click", loginAccount);

/* close login */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

object.onclick = createAnAccount(){
    document.getElementById('idlogin-btn').style.display = 'none';
}

object.onclick = loginAccount(){
    document.getElementById('idlogin-btn').style.display = 'block';
}
