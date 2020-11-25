import React from 'react'

import './App.scss'

import img1 from 'assets/images/test_1.jpg'

const App = () => {
  return (
    <div className='app'>
      <div>
        Azure Test Webpack
      </div>

      <div>
        <img
          className='image'
          src={img1}
          alt='image1'
        />
      </div>

      <div>
        <span
          className='image image2'
        />
      </div>

      <div>
        <img
          className='image'
          src={new URL('assets/images/test_3.jpg', import.meta.url)}
          alt='image3'
        />
      </div>

      <div>
        <img
          className='image'
          src={new URL('assets/images/test_4.png', import.meta.url)}
          alt='image4'
        />
      </div>
    </div>
  )
}

export default App
