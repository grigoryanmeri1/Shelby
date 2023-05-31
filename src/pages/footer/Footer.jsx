import React from 'react'
import f from './footer.module.scss';
import { TbArrowBigUpLineFilled } from 'react-icons/tb';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {TfiEmail} from 'react-icons/tfi'
import {ImLocation} from 'react-icons/im'


export function Footer({ data }) {

  const scrollBtn = document.querySelector('.isShowBtn');
  window.onscroll = ()=>{
    if(window.scrollY > 700){
      scrollBtn.classList.remove('isShowBtn_hide');
    } else {
      scrollBtn.classList.add('isShowBtn_hide');
    }
  }

  return (
    <div className={f.footer}>
      {
        data.map((box, index) =>
          <div key={box.id} className={f.box}>
            <img className={'imageFooter'+index} src={box.photo} alt={box.photo} />
            <p>{box.description}</p>
            
            {
              box.phone ? <p><BsFillTelephoneFill /> { box.phone} </p> : ''
            }
            
            {
              box.email ?  <p><TfiEmail />{box.email}</p> : ''
            }

            {
              box.address ? <p><ImLocation />{box.address}</p> : ''
            }
            

            <h3>{box.header}</h3>
            <ul>
              <li>{box.text1}
                <ul>
                  <li>{box?.text1_1}</li>
                  <li>{box?.text1_2}</li>
                  <li>{box?.text1_3}</li>
                  <li>{box?.text1_4}</li>
                </ul>
              </li>
              <li>{box.text2}
                <ul>
                <li>{box?.text2_1}</li>
                </ul>
              </li>
              <li>{box.text3}</li>
              <li>{box.text4}
                <ul>
                <li>{box?.text4_1}</li>
                </ul>
              </li>
              <li>{box.text5}</li>
            </ul>
 
          </div>)
      }

 
      <div 
        id='arrowUp' 
        className= 'isShowBtn isShowBtn_hide'
        onClick={()=> window.scrollTo(0, 0)}>
        <TbArrowBigUpLineFilled />
      </div>

    </div>
  )
}


