// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Kukwac
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
    let firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
    let Address = parseInt(document.getElementById("address").value)

  // display name and age back to user
    document.getElementById('user-info').innerHTML = "Your first name is " + firstName + " and you're address is " + Address + "."
}
