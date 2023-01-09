// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-6/sw.js", {
    scope: "/ICS2O-Assignment-6/",
  })
}

/**
 * This function displays random cat facts.
 */
const getFact = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("fact").innerHTML =
       data.data
  } catch (err) {
    console.log(err)
  }
}

getFact(
  "https://meowfacts.herokuapp.com/"
)
