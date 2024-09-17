document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    const floors = document.getElementById("floors").value;
    const lifts = document.getElementById("lifts").value;

    const params = `?floors=${floors}&lifts=${lifts}`;
    if (floors < 1 && lifts < 1) {
      alert("Error! Please provide valid inputs.");
    } else if (floors > 0 && lifts > 0 && floors && lifts) {
      window.location.href = `lift.html${params}`;
    }
  });
