import React, { useEffect, useState } from 'react';
import apiCall from '../api/callApi';

const TableMarketing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await apiCall.getAllDataMarketing();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full h-full bg-primarybg flex flex-col justify-between mt-[70px]'>
            <div className='flex justify-center mt-20'>
                <div className="relative overflow-x-auto max-w-[calc(100% - 40px)]">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400 bg-white dark:bg-gray-800">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b dark:bg-gray-800 dark:border-gray-700`}
                                >
                                    <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4 text-black dark:text-white">
                                        {item.name}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TableMarketing;
