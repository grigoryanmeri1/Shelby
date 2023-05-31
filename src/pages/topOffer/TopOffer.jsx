import s from './topOffer.module.scss';

import React from 'react'

export  function TopOffer({data, header}) {
  return (
    <div className={s.topOffer}>
      <h2>{header}</h2>
      <div className={s.container}>
        {
          data.map(item => 
          <div className={s.box} key={item.id}>
              <img src={item.photo} alt={item.title} />
            <div className={s.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>)
        }

      </div>
    </div>
  )

}
