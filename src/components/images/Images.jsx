import React from 'react'

import {
  Link
} from 'react-router-dom'

import image1 from 'assets/images/test_1.jpg'
import image5 from './test_5.png'

const Images = () => {
  const t = 'test_2'
  return (
    <div className='images'>
      Images
      <Image
        to=''
        src={image1}
        alt='image1'
      />

      <img
        className='image-small'
        src={new URL('assets/images/test_3.jpg', import.meta.url)}
        alt='image3'
      />

      <img
        className='image-small'
        src='assets/images/test_2.jpg'
        alt='image2'
      />

      <Image
        to=''
        src='/assets/images/test_3.jpg'
        alt='image3'
      />

      <Image
        to=''
        src='../../assets/images/test_4.png'
        alt='image4'
      />

      <Image
        to=''
        src='./test_5.png'
        alt='image5'
      />

      <Image
        to=''
        src={image5}
        alt='image5'
      />
    </div>
  )
}

const Image = ({
  to,
  src,
  alt
}) => {
  console.log(src)
  return (
    <div>
      <img
        className='image'
        src={new URL(src, import.meta.url)}
        alt={alt}
      />
    </div>
  )
}

export default Images
