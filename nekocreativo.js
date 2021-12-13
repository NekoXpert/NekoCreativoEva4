

//codigo de chat bot//
(function () {
  var ldk = document.createElement('script');
  ldk.type = 'text/javascript';
  ldk.async = true;
  ldk.src = 'https://s.cliengo.com/weboptimizer/61b74d1c92cf92002a177ace/61b74df892cf92002a177b12.js?platform=onboarding_modular';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ldk, s);
})();


//deshabilitar menu contextual del navegador//

function inhabilitar(){
    alert ("Cuidadito te vigilo o-o.\n\n Nos vemos, amiguito sera para otra..")
    return false
}

document.oncontextmenu=inhabilitar



// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
