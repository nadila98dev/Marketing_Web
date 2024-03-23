import React, { useEffect, useState } from 'react';
import callApi from '../api/callApi';

const TablePenjualan = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await callApi.getAllDataSelling();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full h-full bg-primarybg flex flex-col justify-between mt-[70px]">
            <div className="flex justify-center mt-20 mb-8">
                <div className="overflow-x-auto max-w-full md:max-w-[calc(100% - 40px)]">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-4">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Transaction Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Marketing ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cargo Fee
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Balance
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Grand Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b dark:bg-gray-800 dark:border-gray-700`}
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4">{item.transaaction_number}</td>
                                    <td className="px-6 py-4">{item.marketing_id}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                    <td className="px-6 py-4">{item.cargo_fee}</td>
                                    <td className="px-6 py-4">{item.total_balance}</td>
                                    <td className="px-6 py-4">{item.grand_total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TablePenjualan;
