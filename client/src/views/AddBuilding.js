import React from 'react'
import Navbar from '../components/Navbar'

export default function AddBuilding() {
  return (
    <>
      <Navbar />
      <div>
        <h3>Enter the bildings's details</h3>
        <form action="/buildings" method="post">
          <label for="name">Enter floor name</label>
          <input type="text" name="name" id="name" />
          <label for="count">Enter the number of houses</label>
          <input type="number" name="house_count" id="house_count" />
          <label for="rent">Enter the rent for the building</label>
          <input type="text" name="rent" id="rent" />
          <input type="submit" />
        </form>
      </div>
    </>
  )
}
