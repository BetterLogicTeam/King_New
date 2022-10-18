import React from 'react'
import './dummy.css'
import KingLogo from "../Assets/logo.png"

const Dummy = () => {
  return (
    <div className='container mt-5' >
      <div className='row'>
        <div className='col-6'>
          <video autoPlay="autoPlay" loop width="100%" className='h-50' id='vid'>
            <source src="light.mp4" type="video/mp4" />

          </video>
        </div>
        <div className='col-6'>
          <div class="card" style={{ backgroundColor: "rgb(20, 37, 44)", width: "18rem" }}>


            <img class="card-img-top mb_image" src={KingLogo} alt="Card image cap" />
            <div class="card-body text-center">
              <button className='btn btn btn-outline-warning text-white '>Eth</button>
              <button className='btn btn-outline-warning text-white  mx-2'>Eth</button>

              <p class="card-text text-white mb-0 mt-2">GENESIS KING CROWN</p>
              <p className='text-white mb-0'>0.15BNB</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dummy