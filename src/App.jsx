//import { useState } from 'react'
import './App.css'

function App() {

  return <div className='container p-4 mx-auto my-4 bg-slate-200 max-w-2xl'>
    <h1 className='font-serif font-black text-3xl pb-3'>
      ALPACA GENERATOR
    </h1>
    <div className='flex flex-row flex-wrap content-center m-auto font-mono font-bold container'>
      <div className='basis-1/2'>
        image
      </div>
      <div className='basis-1/2'>
        <div className='block'>
          <div className=''>ACCESSORIZE THE ALPACA&apos;S</div>
          <div className='grid grid-cols-6 gap-1 py-3'>
            <div className='col-span-2 content-center'><button className='btn-primary'>Hairs</button></div>
            <div className='col-span-2 content-center'><button className='btn-primary'>Ears</button></div>
            <div className='col-span-2 content-center'><button className='btn-primary'>Eyes</button></div>
            <div className='col-span-2 content-center'><button className='btn-primary'>Mouth</button></div>
            <div className='col-span-2 content-center'><button className='btn-primary'>Neck</button></div>
            <div className='col-span-2 content-center'><button className='btn-primary'>Leg</button></div>
            <div className='col-span-3 content-center'><button className='btn-primary'>Accessories</button></div>
            <div className='col-span-3 content-center'><button className='btn-primary'>Background</button></div>
          </div>
        </div>
        <div>
          <div>STYLE</div>
          <div>

          </div>
        </div>
      </div>
    </div>
    </div>
}

export default App
