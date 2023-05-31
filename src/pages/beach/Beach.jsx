import s from './beach.module.scss';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


export function Beach({ data, header, descr, image }) {

  // const [active, setActive] = useState(false);

  const [count, setCount] = useState(1);

  const { ref, inView } = useInView({
    threshold: .7,
    triggerOnce: true,
  });

 const addCount =(to)=>{

        let startTime = 1; 

        const interval = setInterval(()=>{
            
            setCount( prev => prev+1 );
            startTime++;
            if(startTime + 1 > to) clearInterval(interval);

        }, 100)

    }


  useEffect(()=> {
    if(inView) addCount(50);
  },[inView]);

  return (
    <div className={s.beach}>
      <div className={s.transparentBox}>
 
        <div className={s.container} style={{ backgroundImage: `url(${image})` }}>
          <h2>{header}</h2>
          <div className={s.wrap}>
            {
              data.map(item =>
                <div className={s.content} key={item.id}>
                  <h3 ref={ref} >{count}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>)
            }
          </div>
        </div>
      </div>

      <div className={s.info}>{descr}</div>
    </div>
  )
}
