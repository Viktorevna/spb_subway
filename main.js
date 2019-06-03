const $body = document.getElementsByTagName("body");
const $blueStations = document.querySelectorAll(".blue_station");
console.log($blueStations);

$blueStations.forEach(item => {
  item.addEventListener("click", function() {
    $body.style.opacity = "0.5";
  })
})