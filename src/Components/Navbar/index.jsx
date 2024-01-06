import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import Nav from "../../img/tm-lumino-logo.png"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)

  //  #373a3c

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 680; // 20 o'rniga o'zgartiring
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  const navigate  = useNavigate(false)


  const handleNext1 = () => {
    navigate('In')
  }

  return (
    <div className=''>
      <div className="row navbar">

        <div className={`${scrolled ? 'bg-[#373a3c]' : 'bg-[#0000004c]'} h-[80px] fixed transition-all  w-full z-50`}>

          <div className='hidden md:flex md:gap-[60px] gap-[100px] justify-center pt-[20px]'>
            <a href='#In' className='QQQ text-white text-[25px] font-extralight'>Intro</a>
            <a href='#News' className='QQQ text-white text-[25px] font-extralight'>News</a>
            <a href='#Gal' className='QQQ text-white text-[25px] font-extralight'>Gallery</a>
            <a href='#Con' className='QQQ text-white text-[25px] font-extralight'>Contact</a>
            <Link to={'/columins'} className='QQQ text-white text-[25px] font-extralight'>Columns</Link>
          </div>
          <div className=' md:hidden  bg-[] flex justify-end'>
            <button className="p-5" onClick={() => {
              setOpen(!open)
              setMenu(!menu)
            }}>{menu ? <FaTimes color="white" fontSize={'30px'} /> : <AiOutlineMenu color="white" fontSize={'30px'} />}</button>
          </div>
          <div className={`w-full ${open ? 'h-[350px]' : "h-0"} ${scrolled ? 'bg-[#373a3c]' : 'bg-[#0000004c]'} overflow-hidden mt-[10px] absolute duration-300 transition-all flex flex-col items-center gap-8 `}>
            <a href='#In' className='QQQ text-white text-[25px] font-extralight'>Intro</a>
            <a href='#News' className='QQQ text-white text-[25px] font-extralight '>News</a>
            <a href='#Gal' className='QQQ text-white text-[25px] font-extralight'>Gallery</a>
            <a href='#Con' className='QQQ text-white text-[25px] font-extralight'>Contact</a>
            <a href='' className='QQQ text-white text-[25px] font-extralight'>Columns</a>
          </div>
        </div>


      </div>
      <div id='In' class="row">
        <div className="tm-intro">

          <section id="tm-section-1">
            <div className="tm-container text-xs-center tm-section-1-inner">
              <div className='flex justify-center'>
                <img src={Nav} alt="" />

              </div>
              <h1 className="tm-site-name text-center text-[40px] mt-7">Lumino</h1>
              <p className="tm-intro-text text-center">Free Bootstrap 4.0 Website Template</p>
              <div className='flex justify-center'>
                <a href="#tm-section-2" class="tm-intro-link">Begin</a>

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Navbar