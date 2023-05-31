import React from 'react';
import './menu2.scss';

export  function Menu2({menu2}) {
  return (
    <div className='wrap'>
          <p>{menu2.h1}</p>
          <p>{menu2.h2}</p>
          <p>{menu2.h3}</p>
          <p>{menu2.h4}</p>
      </div>
  )
}
