import React, { useEffect } from 'react'
import callApi from '../api/callApi'
import { useState } from 'react'

const TableCommission = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await callApi.getAllDataCommission()
        setData(responseData)
        
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])
  
  return (
    <div className='w-full h-full bg-primarybg flex flex-col justify-between my-[70px]'>
      <div className='flex justify-center mt-20'>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Month
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sales
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Commission Percentage
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Commission Nominal
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {data.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b dark:bg-gray-800 dark:border-gray-700`}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.id}
                    </th>
                    <td className="px-6 py-4">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">
                      {item.month}
                    </td>
                    <td className="px-6 py-4">
                      {item.sales}
                    </td>
                    <td className="px-6 py-4">
                      {item.commission_percentage}
                    </td>
                    <td className="px-6 py-4">
                      {item.commission_nominal}
                    </td>
                    </tr>
                    
                   ))}
                </tbody>
            </table>
            </div>

      </div>
    </div>
  )
}

export default TableCommission