// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit3-03-testCases/sw.js", {
    scope: "/ICS2O-unit3-03-testCases/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)

  // process
  const volume = (4.0 / 3.0) * Math.PI * radius ** 3

  // output
  document.getElementById("volume").innerHTML =
    "volume is: " + volume.toFixed(2) + " cm³"
}
