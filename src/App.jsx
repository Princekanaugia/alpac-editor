//import { useState } from 'react'
import './App.css'

function App() {

  return <>
    <h1 className='m-2 p-4'>
      ALPACA GENERATOR
    </h1>
    <div className='flex flex-row content-center m-auto'>
      <div className='basis-1/2'>
        image
      </div>
      <div className='basis-1/2'>
        <div className='block'>
          <div className=''>ACCESSORIZE THE ALPACA&apos;S</div>
          <div className='grid grid-cols-6 gap-1 p-4 mx-2 my-1'>
            <div className='col-span-2 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Hairs</button></div>
            <div className='col-span-2 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Ears</button></div>
            <div className='col-span-2 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Eyes</button></div>
            <div className='col-span-2 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Mouth</button></div>
            <div className='col-span-2 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Neck</button></div>
            <div className='col-span-2 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Leg</button></div>
            <div className='col-span-3 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Accessories</button></div>
            <div className='col-span-3 content-center'><button className='border-blue-600 rounded-3xl border-2 px-4 text-blue-600'>Background</button></div>
          </div>
        </div>
        <div>
          <div>STYLE</div>
          <div>

          </div>
        </div>
      </div>
    </div>
    </>
}

export default App
