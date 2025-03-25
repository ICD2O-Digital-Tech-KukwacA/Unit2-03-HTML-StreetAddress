// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user'street name and street number and displays it back to user

  // get street name from text field
    let StreetName = document.getElementById("street-name").value
	// get street number from text field and cast it to integer
    let StreetNumber = parseInt(document.getElementById("street-number").value)

  // display name and age back to user
    document.getElementById('user-info').innerHTML = "Your street name name is " + StreetName + " and your street number is " + StreetNumber + "."
}
