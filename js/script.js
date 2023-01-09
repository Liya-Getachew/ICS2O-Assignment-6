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
    document.getElementById("fact").innerHTML = '<a href="' +
        data.artist_url +
        '">' +
        data.artist +
        "</a>" + '<img src="' + data.url + '" alt="API image" height="200">'
  } catch (err) {
    console.log(err)
  }
}

getFact(
  "https://api.catboys.com/img"
)
