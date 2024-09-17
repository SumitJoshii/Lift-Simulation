document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    const floors = document.getElementById("floors").value;
    const lifts = document.getElementById("lifts").value;

    const params = `?floors=${floors}&lifts=${lifts}`;

    if (floors && lifts) {
      window.location.href = `lift.html${params}`;
    } else {
      alert("Error! Please provide all inputs.");
    }
  });
