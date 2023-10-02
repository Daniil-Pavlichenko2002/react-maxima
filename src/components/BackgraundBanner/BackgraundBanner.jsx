import React from 'react'

import './BackgraundBanner.css'

const BackgraundBanner = ({darkTheme}) => {
  return (
    <div style={{background: darkTheme ? 'black' : ''}} className='BackgraundBanner'></div>
    )
}

export default BackgraundBanner