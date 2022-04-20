import React from 'react'
import Navbar from '../components/Navbar'

export default function AddTenants() {
  return (
    <>
      <Navbar />
      <div className='flex items-center flex-col'>
        <h3 className='text-2xl font-semibold my-10'>Enter new tenant details</h3>
        <form action="/tenants/add" method="post" className="w-1/3">
          <div className="font-normal text-md">
            <div className="flex justify-between mb-3" >
              <label htmlFor="name">Enter name</label>
              <input type="text" name="name" id="name" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3" >
              <label htmlFor="email">Enter email</label>
              <input type="email" name="email" id="email" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="phone">Enter phone number</label>
              <input type="tel" name="phone" id="phone" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="id">Enter tenant ID no.</label>
              <input type="number" name="passport_id" id="id" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="house_no">Enter house number</label>
              <input type="text" name="house_no" id="house_no" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="floor">Enter the building</label>
              <input type="number" name="building_id" id="building_id" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" />
            </div>

            <div className="flex justify-between mb-3">
              <label htmlFor="status">Select rent status</label>
              <select name="status" id="status" className="bg-gray-100 appearance-none border-2 border-teal-400 rounded px-2 text-gray-700 ml-2 focus:outline-teal-600" >
                <option value="pain">Paid</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div>

              <input type="submit" className="rounded-md shadow-sm text-white font-semibold bg-teal-500 px-4 py-1" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
