/* get login */
var modal = document.getElementById('idlogin-btn');

/* close login */
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* scalable functions */ 
var $div = $("#wrap");
var divHeight = $div.outerHeight();
var divWidth = $div.outerWidth();

var $wrapper = $("#scaleable-wrapper");

$wrapper.resizable({
  resize: doResize
});

function resize(event, ui) {

  var scale, origin;

  scale = Math.min(
    ui.size.width / divWidth,
    ui.size.height / divHeight
  );

  $div.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });

}

var starterData = {
  size: {
    width: $wrapper.width(),
    height: $wrapper.height()
  }
}
resize(null, starterData);
