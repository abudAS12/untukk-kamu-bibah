let body = document.body;
let btn = document.getElementById("btn")

isi.style.display = "none" 

var audioplaying = true;
function musik() {
  var audio = document.getElementById("audio-musik");
  if (audioplaying) audio.play();
  else audio.pause();
  audioplaying = audioplaying;
  kotak.style.display = "none"
  isi.style.display = "block"

  body.classList.toggle("berdua")
}
