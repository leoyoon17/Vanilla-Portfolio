function menuBarOnClick(bars) {
    bars.classList.toggle("change");

    // Show dropdown menu onClick
    document.getElementById("myDropdown").classList.toggle("show");

}

// Remove dropdown menu onclick on anywhere else on the screen

window.onclick = function(event) {

  this.console.log(event.target.className);

  if (!event.target.matches(".menu-container")) {

    var bars = document.getElementsByClassName("menu-container");
    var barsId = document.getElementById("myMenuContainer");

    if (barsId.className == "menu-container change") {
      for (var i = 0; i < bars.length; i++) {
        bars[i].classList.toggle("change");
      }
    }
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

}