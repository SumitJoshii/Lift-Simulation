// Initialize lift_information globally
let lift_information = [];
let free_lift_counter;

// Function to generate floors and lifts
function generateFloorsAndLifts(n, k) {
  // Clear existing floors and lifts
  const existingFloorContainer = document.querySelector(".floorContainer");
  const existingLiftContainer = document.querySelector(".liftContainer");
  if (existingFloorContainer) existingFloorContainer.remove();
  if (existingLiftContainer) existingLiftContainer.remove();

  // Create new floor container
  const floorContainer = document.createElement("div");
  floorContainer.className = "floorContainer";

  for (let i = 0; i < n; i++) {
    const floor_div = document.createElement("div");
    floor_div.className = "floor";

    // Create buttons and floor name
    const innerDiv1 = document.createElement("div");
    innerDiv1.className = "control-buttons";
    const upButton = document.createElement("button");
    // upButton.innerHTML = "&#8963;";
    upButton.textContent = "Up";
    upButton.className = "up-button";
    const downButton = document.createElement("button");
    // downButton.innerHTML = "&#8964;";
    downButton.textContent = "Down";
    downButton.className = "down-button";

    if (i == n - 1) {
      innerDiv1.append(upButton);
    } else if (i == 0) {
      innerDiv1.append(downButton);
    } else {
      innerDiv1.append(upButton);
      innerDiv1.append(downButton);
    }

    const innerDiv2 = document.createElement("div");
    innerDiv2.className = "floor-name";
    if (i == n - 1) {
      innerDiv2.textContent = "Ground Floor";
    } else {
      innerDiv2.textContent = `Floor ${n - (i + 1)}`;
    }

    floor_div.append(innerDiv1);
    floor_div.append(innerDiv2);
    floor_div.setAttribute("data-floor", n - (i + 1));

    floorContainer.appendChild(floor_div);
  }

  document.body.appendChild(floorContainer);

  // Create new lift container
  const liftContainer = document.createElement("div");
  liftContainer.className = "liftContainer";

  lift_information.length = 0; // Clear previous lift information

  for (let i = 0; i < k; i++) {
    const lift = document.createElement("div");
    lift.className = "lift";
    lift.id = `lift-${i + 1}`;

    const temp_lift_information = [];
    temp_lift_information.push(lift.id, 0, false);
    lift_information.push(temp_lift_information);

    const leftDoor = document.createElement("div");
    leftDoor.className = "left-door";
    const rightDoor = document.createElement("div");
    rightDoor.className = "right-door";

    lift.appendChild(leftDoor);
    lift.appendChild(rightDoor);

    liftContainer.appendChild(lift);
  }

  floorContainer.appendChild(liftContainer);
  // document.body.appendChild(liftContainer);

  addListeners();

  // Add event listeners to the new buttons for lift movement
  // document.querySelectorAll(".up-button, .down-button").forEach((button) => {
  //   button.addEventListener("click", function () {
  //     const floorElement = this.closest(".floor");
  //     const targetFloor = parseInt(floorElement.getAttribute("data-floor"));
  //     moveLiftToFloor(targetFloor);
  //   });
  // });
}

function getQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    floors: urlParams.get("floors"),
    lifts: urlParams.get("lifts"),
  };
}

const params = getQueryParams();
free_lift_counter = params.lifts;

// Generate floors and lifts on initial page load
generateFloorsAndLifts(params.floors, params.lifts);

// Regenerate floors and lifts when the "Generate!" button is clicked
document
  .getElementById("update-generate-button")
  .addEventListener("click", function () {
    const n = document.getElementById("floors").value;
    const k = document.getElementById("lifts").value;
    free_lift_counter = k;

    if (n < 1 && k < 1) {
      alert("Error! Please provide valid inputs.");
    } else if (n > 0 && k > 0 && n && k) {
      generateFloorsAndLifts(n, k);
    }
  });

//=============================

// // lift.html
// function getQueryParams() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return {
//     floors: urlParams.get("floors"),
//     lifts: urlParams.get("lifts"),
//   };
// }

// const params = getQueryParams();

// let n = params.floors;
// let k = params.lifts;

// // On Page Generate~!
// document
//   .getElementById("update-generate-button")
//   .addEventListener("click", function () {
//     console.log(n, k);
//     n = document.getElementById("floors").value;
//     k = document.getElementById("lifts").value;
//   });

// const existingFloorContainer = document.querySelector(".floorContainer");
// const existingLiftContainer = document.querySelector(".liftContainer");
// if (existingFloorContainer) existingFloorContainer.remove();
// if (existingLiftContainer) existingLiftContainer.remove();

// const floorContainer = document.createElement("div");
// floorContainer.className = "floorContainer";
// for (let i = 0; i < n; i++) {
//   const floor_div = document.createElement("div");
//   floor_div.className = "floor";

//   //   floor_div.textContent = `Div ${n - i}`;

//   const innerDiv1 = document.createElement("div");
//   innerDiv1.className = "control-buttons";
//   const upButton = document.createElement("button");
//   upButton.textContent = "Up";
//   upButton.className = "up-button";
//   const downButton = document.createElement("button");
//   downButton.textContent = "Down";
//   downButton.className = "down-button";

//   if (i == n - 1) {
//     innerDiv1.append(upButton);
//   } else if (i == 0) {
//     innerDiv1.append(downButton);
//   } else {
//     innerDiv1.append(upButton);
//     innerDiv1.append(downButton);
//   }

//   const innerDiv2 = document.createElement("div");
//   innerDiv2.className = "floor-name";
//   if (i == n - 1) {
//     innerDiv2.textContent = `Ground Floor`;
//   } else {
//     innerDiv2.textContent = `Floor ${n - (i + 1)}`;
//   }

//   floor_div.append(innerDiv1);
//   floor_div.append(innerDiv2);

//   floor_div.setAttribute("data-floor", n - (i + 1));
//   floorContainer.appendChild(floor_div);
// }
// document.body.appendChild(floorContainer);

// const liftContainer = document.createElement("div");
// liftContainer.className = "liftContainer";

// const lift_information = [];

// for (i = 0; i < k; i++) {
//   const lift = document.createElement("div");
//   lift.className = "lift";
//   lift.id = `lift-${i + 1}`;

//   const temp_lift_information = [];
//   temp_lift_information.push(lift.id, 0, false);
//   lift_information.push(temp_lift_information);

//   const leftDoor = document.createElement("div");
//   leftDoor.className = "left-door";
//   const rightDoor = document.createElement("div");
//   rightDoor.className = "right-door";

//   lift.appendChild(leftDoor);
//   lift.appendChild(rightDoor);

//   liftContainer.appendChild(lift);
// }

// // liftContainer.setAttribute("style", "height:100px width:50px");
// document.body.appendChild(liftContainer);

let lift_call_queue = [];

document.getElementById("floors").value = params.floors;
document.getElementById("lifts").value = params.lifts;

// LIFT MOVEMENT LOGIC
//====================
const floorHeight = 90; // Example floor height in pixels
let disabled = false;
let timeoutDuration = 0;
function addListeners() {
  // let listenerAdded = false; //LOL
  document.querySelectorAll(".up-button, .down-button").forEach((button) => {
    // let listenerAdded = false;
    button.addEventListener("click", function () {
      //Tried StopPropagation and removeEventListeners to stop being called twice!

      // Get the floor number from the parent container
      const floorElement = this.closest(".floor");
      const targetFloor = parseInt(floorElement.getAttribute("data-floor"));

      // console.log("Button clicked!");

      if (!disabled) {
        // moveLiftToFloor(targetFloor);
        lift_call_queue.push(targetFloor);
        if (lift_call_queue.length > 0) {
          moveLiftToFloor(lift_call_queue); // Call the function every 250 ms if the queue is not empty
        }
        console.log("queue :", lift_call_queue);
        
        
        button.disabled = true;
        button.classList.add("active_button");
        // console.log("disabled");
      }
      console.log("timeout ==>>> ", timeoutDuration)

      setTimeout(() => {
        button.disabled = false;
        button.classList.remove("active_button");
        // console.log("enabled");
      }, timeoutDuration || 3000);//Now this timeout duration will be different.

      // Call the function to move the lift to the target floor
      // moveLiftToFloor(targetFloor);
    });
  });
}

// setInterval(moveLiftToFloor(lift_call_queue), 250);

setInterval(() => {
  if (lift_call_queue.length > 0) {
    moveLiftToFloor(lift_call_queue); // Call the function every 250 ms if the queue is not empty
  }
}, 250);

let currentFloor = -1;
let distance = -1;
async function moveLiftToFloor(lift_call_queue) {
  if(free_lift_counter > 0){
    free_lift_counter -= 1;
    console.log("free lifts:", free_lift_counter);

    // console.log("1- Called")

    targetFloor = lift_call_queue.shift();
    console.log("target floor :", targetFloor);
    
    // Get the lift that is available or nearest to the floor
    const lift = getAvailableLift(targetFloor); // Implement this logic to get the nearest available lift

    // Calculate the lift position based on the floor height

    const liftPosition = targetFloor * floorHeight;

    // Move the lift to the calculated position
    // let currentFloor = lift_information[selected_lift][1];
    distance = Math.abs((liftPosition - currentFloor) / 90);
    liftSpeed = 2 * distance;
    // console.log(currentFloor, liftPosition, distance, liftSpeed);

    lift.style.transform = `translateY(-${liftPosition}px)`; // Negative because top of page is 0
    lift.style.transition = `transform ${liftSpeed}s linear`; // Optional: add a smooth transition
    setTimeout(() => {
      doorAnimation(lift);
    }, liftSpeed * 1000);
  }
}

async function doorAnimation(lift) {
  lift.classList.add("door-open");
  setTimeout(() => {
    lift.classList.remove("door-open");
    // console.log("removed!!!!");
    // setTimeout(() => {
    //   free_lift_counter += 1;
    // }, 1000);
    console.log("free lifts:", free_lift_counter);
    
  }, 1500);
}

let selected_lift = -1;
// let timeoutDuration = 0;
function getAvailableLift(targetFloor) {
  console.log("Get Lift Called");

  // Placeholder logic to get the nearest available lift

  let free_lift = "";

  //if all lifts are on ground floor OR all lifts are on top floor
  // Doesn't matter, just return the closest lift
  let closest = Number.MAX_VALUE;
  const call_floor_height = 90 * targetFloor;
  // let selected_lift = -1;
  for (i = 0; i < lift_information.length; i++) {
    if (lift_information[i][2]) {
      // console.log(lift_information[i], "Skipped!");

      continue;
    }
    let distance = Math.abs(lift_information[i][1] - call_floor_height);

    if (distance < closest) {
      closest = distance;
      free_lift = "#" + lift_information[i][0];
      selected_lift = i;
    }
  }
  currentFloor = lift_information[selected_lift][1];
  timeoutDuration = Math.abs(targetFloor - currentFloor / 90) * 2000 + 3000;
  // console.log("timeout: ", timeoutDuration, "- ", targetFloor, currentFloor);

  updateLiftInformation(selected_lift, call_floor_height); //Why is this being called two times?!

  // return document.querySelector("#lift-2");
  return document.querySelector(free_lift); // Update this logic based on your requirements
}

function updateLiftInformation(selected_lift, call_floor_height) {
  lift_information[selected_lift][1] = call_floor_height;
  liftBusy(selected_lift);

  // Object Reference Behavior - JS
  console.log("before", JSON.parse(JSON.stringify(lift_information[selected_lift])));
  // setTimeout(liftBusy(selected_lift), 6000); //After removing this line, Two lifts get called!!!

  setTimeout(() => {
    liftBusy(selected_lift);
    free_lift_counter += 1;

    console.log("after", JSON.parse(JSON.stringify(lift_information[selected_lift])));
  }, timeoutDuration); // Delay in ms
  // timeoutDuration = 0;
}

function liftBusy(selected_lift) {
  lift_information[selected_lift][2] = !lift_information[selected_lift][2];
}
