import React from 'react'
import Img from "../../img/tm-600x300-01.jpg"
import Img2 from "../../img/tm-600x300-02.jpg"
import Img3 from "../../img/tm-600x300-03.jpg"

import CArtStyle from './CartStyle'

function Cart() {


  const data = [
    {
      title: 'Nulla molestie euismod',
      desc: 'I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.',
      img: Img,
      status: false

    },
    {
      title: 'Nulla molestie euismod',
      desc: 'I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.',
      img: Img2,
      status: true

    },
    {
      title: 'Nulla molestie euismod',
      desc: 'I created this personal project in order to show  how to create an interface in Figma using a  portfolio as an example.',
      img: Img3,
      status: false

    },

  ]



  return (
    <div id='News' className='bg-[#F4F4F4]'>
      <div> 
        {data.map((elem, ind) => (
          <CArtStyle key={ind + 1} title={elem.title} img={elem.img} desc={elem.desc} status={elem.status} />
        ))}

      </div>
      <div className='h-14'></div>
    </div>
  )
}

export default Cart