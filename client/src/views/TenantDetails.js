import React from 'react'
import Navbar from '../components/Navbar'

export default function TenantDetails() {
  return (
    <div>
      <Navbar />
      <div className='flex items-center flex-col w-2/3 mx-auto'>

        <h3 className='text-xl font-semibold my-4'>Tenant Details</h3>
        <div className='flex items-start flex-col justify-between'>
          <div className='space-x-8 border-b-2 border-green-200 p-2'>
            <span className='text-lg font-semibold py-3 '>Tenant id:</span>
            <span>ID</span>
          </div>
        </div>
      </div>
    </div>
  )
}
