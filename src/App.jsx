import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Component/Home'
import Detail from './Component/Detail'
import Create from './Component/Create'
import Edit from './Component/Edit'
import { HashRouter } from 'react-router-dom'

function App() {
const {search,pathname}=useLocation();

  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-hidden'>
      {(pathname != "/" || search.length > 0)&&(
         <Link to="/" className='text-sky-600 absolute left-[11%] top-[2%]'>
           <button className="font-semibold mt-4 text-sky-400 border border-sky-400 p-2 h-10 rounded flex justify-center items-center"> Home</button>
        
          </Link>
        
      )}
      {(pathname == "/" || search.length > 0)&&(
         <Link to="/create" className='text-sky-600 absolute left-[2%] top-[2%]'>
          <button className="font-semibold mt-4 text-sky-400 border border-sky-400 p-2 h-10 rounded flex justify-center items-center"> Add New Product </button>
          </Link>
      )}
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/detail/:id'element={<Detail />} />
        <Route path='/edit/:id'element={<Edit />} />
      </Routes>

    </div>
  )
}

export default App
