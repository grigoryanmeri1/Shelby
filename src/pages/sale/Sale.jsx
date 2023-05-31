import s from './sale.module.scss';

export  function Sale({sales, header}) {
  return (
    <>
      <h2>{header}</h2>
      <div className={s.container} >
        {
          sales.map(sale => 
          <div className={s.sale} key = {sale.id}>
            <div className={s.img}><img src={sale.photo} alt={sale.title} /></div>
            <h3>{sale.title}</h3>
            <p>{sale.description}</p>
            <button className={s.btn}>{sale.button}</button>
          </div>)
        }
      </div>
    </>
  )
}
