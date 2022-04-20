import React from 'react'
import Navbar from '../components/Navbar'

export default function AddTenants() {
  return (
    <>
      <Navbar />
      <div>
        <h3>Enter new tenant details</h3>
        <form action="/tenants/add" method="post">
          <label htmlFor="name">Enter name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Enter email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="phone">Enter phone number</label>
          <input type="tel" name="phone" id="phone" />
          <label htmlFor="id">Enter National ID no./Passport no.</label>
          <input type="number" name="passport_id" id="id" />
          <label htmlFor="house_no">Enter house number</label>
          <input type="text" name="house_no" id="house_no" />
          <label htmlFor="floor">Enter the building</label>
          <input type="number" name="building_id" id="building_id" />
          <label htmlFor="status">Select rent status</label>
          <select name="status" id="status">
            <option value="pain">Paid</option>
            <option value="Pending">Pending</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </>
  )
}
