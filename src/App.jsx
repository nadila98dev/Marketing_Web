import { useState } from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import TablePenjualan from './pages/TablePenjualan';
import TableMarketing from './pages/TableMarketing';
import TableCommission from './pages/TableCommission';
import TablePembayaran from './pages/TablePembayaran';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<TableMarketing />} />
          <Route path='/tablecommission' element={<TableCommission />} />
          <Route path='/tablepenjualan' element={<TablePenjualan />} />
          <Route path='/tablepembayaran' element={<TablePembayaran />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
