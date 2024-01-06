import React, {useState} from 'react'

import Qales from "../../img/tm-1800x600-01.jpg"

import Qales2 from "../../img/tm-700x350-01.jpg"

import Qales3 from "../../img/tm-700x350-02.jpg"

import EEE from "../../img/tm-500x250-01.jpg"
import EEE2 from "../../img/tm-500x250-02.jpg"
import EEE3 from "../../img/tm-500x250-03.jpg"
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { Link, useNavigate , } from 'react-router-dom'




function Columins() {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)


  const handleNext = () => {
    navigate('/')
  }

  return (
    <div>
      <div class="tm-navbar-container tm-navbar-container-dark">

        <nav class="navbar navbar-full navbar-fixed-top bg-inverse">

          <div>
            <div className='hidden md:flex md:gap-[60px] gap-[100px] justify-center py-[22px] bg-[#373a3c]'>
              <a onClick={() => handleNext()} className='QQQ text-white text-[25px] font-extralight'>Home</a>
              <a href='#News' className='QQQ text-white text-[25px] font-extralight'>News</a>
              <a href='#Gal' className='QQQ text-white text-[25px] font-extralight'>Gallery</a>
              <a href='#Con' className='QQQ text-white text-[25px] font-extralight'>Contact</a>
              <Link to={'/columins'} className='QQQ text-white text-[25px] font-extralight'>Columns</Link>
            </div>
            <div className='block md:hidden pl-60 bg-[#373a3c6a]'>
              <button className="p-5" onClick={() => {
                setOpen(!open)
                setMenu(!menu)
              }}>{menu ? <FaTimes color="white" fontSize={'30px'} /> : <AiOutlineMenu color="white" fontSize={'30px'} />}</button>
            </div>
            <div className={`w-full ${open ? 'h-[350px]' : "h-0"} overflow-hidden mt-[0px] absolute duration-300 transition-all bg-[#373a3c] flex flex-col items-center gap-8 `}>
              <a href='#In' className='QQQ text-white text-[25px] font-extralight'>Intro</a>
              <a href='#News' className='QQQ text-white text-[25px] font-extralight '>News</a>
              <a href='#Gal' className='QQQ text-white text-[25px] font-extralight'>Gallery</a>
              <a href='#Con' className='QQQ text-white text-[25px] font-extralight'>Contact</a>
              <a href='' className='QQQ text-white text-[25px] font-extralight'>Columns</a>
            </div>
          </div>
        </nav>

      </div>

      <div class="container-fluid">

        <div class="row">
          <div id="tm-section-1" class="tm-section">
            <div class="col-md-12 mx-[15px]">
              <h1 class="text-xs-center blue-text tm-page-2-title text-center mt-[70px] xl:mt-0">Lumino Bootstrap 4.0 Columns</h1>
              <p class=" font-extralight text-[24px] text-center ">
                Etiam at rhoncus nisl. Nunc rutrum ac ante euismod cursus. <br />
                Suspendisse imperdiet feugiat massa nec iaculis.
              </p>
              <div className='xl:mx-[150px] lg:mx-[20px] md:mx-[20px] mt-[20px]'>
                <img className='' src={Qales} alt="" />

              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tm-section" id="tm-section-2">
            <div class="col-md-12 xl:mx-[150px] lg:mx-[30px] lg:text-[19.5px] lg:font-extralight md:font-extralight md:text-[21px] font-extralight text-[20.4px]">
              <p class=" tm-description text-left xl:font-extralight xl:text-[20.5px] ">
                Lumino theme is a Bootstrap 4.0 mobile compatible layout for your website.
                Cras dolor neque, mollis et tortor eget, ornare hendrerit lectus. Donec
                condimentum leo ut elementum consequat. Sed condimentum sagittis neque
                in iaculis. Duis quis libero nec mauris porta luctus et sit amet turpis.
                Proin auctor tortor quis ipsum dignissim, quis congue tortor.
              </p>
              <p class="text-left tm-description xl:text-[20.5px] xl:font-extralight">
                Aliquam non vestibulum mi, sed volutpat ipsum. Nunc ultricies quam id
                mi semper, vitae mattis mi iaculis. Nullam tincidunt vehicula turpis at
                porttitor. Sed bibendum odio non maximus suscipit. Pellentesque consectetur
                orci id rutrum lacinia.
              </p>
              <div class="tm-flex-center gap-4 xl:mt-5 ">
                <a href="#" class="btn btn-default btn-lg tm-gray-btn">Large</a>
                <a href="#" class="btn btn-default btn-lg tm-gray-bordered-btn">Large</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tm-section block xl:flex xl:mx-[150px] lg:mx-[30px] lg:flex gap-8 md:flex md:mx-4" id="tm-section-3">

            <div class="col-md-6 margin-bottom-sm-8  xl:w-[50%] lg:w-[50%] md:w-[50%]">
              <div class="xl:w-[100%] xl:text-[21px] mx-4 md:mx-0 text-[20px]">
                <img  src={Qales2} alt="" />

                <p class="text-left tm-description font-extralight  xl:mt-8 lg:text-[20px]" >
                  Proin auctor tortor quis ipsum dignissim, quis congue tortor scelerisque.
                  Etiam malesuada efficitur elit, ut pellentesque mi pellentesque ut.
                </p>
                <p class="text-left tm-description font-extralight lg:text-[20px]">
                  Nullam tincidunt vehicula turpis at porttitor. Sed bibendum odio non maximus
                  suscipit. Pellentesque consectetur orci id rutrum lacinia.
                </p>
              </div>
            </div>

            <div class="col-md-6 xl:w-[50%] lg:w-[50%] md:w-[50%] mx-4 md:mx-0 lg:mx-0 xl:mx-0" >
              <div className='w-[100%]'>
                <img src={Qales3} alt="" />

                <div class="">
                  <div className='mt-[30px] mx-4'>
                    <div className='flex justify-between w-[full] p-4 bg-[#F2F2F2] font-extralight text-[23px] md:text-[21px]'>
                      <p>Aliquam in nibh elementum</p>
                      <p>$100</p>
                    </div>
                    <div className='flex justify-between w-[full] p-4 bg-[#fffff] font-extralight text-[24px] md:text-[21px]'>
                      <p>Donec porta augue vitae egestas</p>
                      <p>$200</p>
                    </div>
                    <div className='flex justify-between w-[full] p-4 bg-[#F2F2F2] font-extralight text-[23px] md:text-[21px]'>
                      <p>Nunc lacinia vehicula ipsum</p>
                      <p>$300</p>
                    </div>
                    <div className='flex justify-between w-[full] p-4 bg-[#ffffff] font-extralight text-[23px] md:text-[21px]'>
                      <p>Porttitor rhoncus vel vitae libero</p>
                      <p>$400</p>
                    </div>
                    <div className='flex justify-between w-[full] p-4 bg-[#F2F2F2] font-extralight text-[23px] md:text-[21px]'>
                      <p>Nulla neque ligula, bibendum vitae</p>
                      <p>$500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="tm-section xl:flex xl:gap-7 xl:mx-[150px] lg:flex lg:gap-6 lg:mx-[20px] md:flex md:gap-6 md:mx-[20px] mx-3 "   id="tm-section-4 ">
            <div class="col-md-4 margin-bottom-sm-3">
              <div class="tm-3-col-box">
                <img src={EEE} alt="" />

                <div class="tm-description-box">
                  <p class="tm-description-text xl:font-extralight xl:text-[21px] lg:font-extralight lg:text-[20px] md:font-extralight md:text-[20px] font-extralight">
                    Proin auctor tortor quis ipsum dignissim, quis congue tortor scelerisque.
                    Etiam malesuada efficitur elit, ut pellentesque mi pellentesque ut.
                  </p>

                  <div class="tm-flex-center   gap-4 flex-col xl:flex-row xl:gap-4">
                    <a href="#" className="p-2 rounded-full mx-7 xl:mx-0 bg-[#006699] border-[2px] border-[#006699] text-white flex justify-center xl:p-3 xl:px-9">Read</a>
                    <a className="p-2 rounded-full mx-7 xl:mx-0  border-[2px] border-[#006699] text-[#006699] flex justify-center xl:p-3 xl:px-9">Read</a>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-md-4 margin-bottom-sm-3">

              <div class="tm-3-col-box">
                <img src={EEE2} alt="" />

                <div class="tm-description-box">
                  <p class="tm-description-text xl:font-extralight xl:text-[21px]  lg:font-extralight lg:text-[20px]  md:font-extralight md:text-[20px] font-extralight">
                    Proin auctor tortor quis ipsum dignissim, quis congue tortor scelerisque.
                    Etiam malesuada efficitur elit, ut pellentesque mi pellentesque ut.
                  </p>

                  <div class="tm-flex-center   gap-4 flex-col xl:flex-row xl:gap-4">
                    <a href="#" className="p-2 rounded-full mx-7 xl:mx-0 bg-[#006699] border-[2px] border-[#006699] text-white flex justify-center xl:p-3 xl:px-9">Read</a>
                    <a className="p-2 rounded-full mx-7 xl:mx-0  border-[2px] border-[#006699] text-[#006699] flex justify-center xl:p-3 xl:px-9">Read</a>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="tm-3-col-box">
                <img src={EEE3} alt="" />

                <div class="tm-description-box">
                  <p class="tm-description-text xl:font-extralight xl:text-[21px]  lg:font-extralight lg:text-[20px]  md:font-extralight md:text-[20px] font-extralight" >
                    Proin auctor tortor quis ipsum dignissim, quis congue tortor scelerisque.
                    Etiam malesuada efficitur elit, ut pellentesque mi pellentesque ut.
                  </p>

                  <div class="tm-flex-center   gap-4 flex-col xl:flex-row xl:gap-4">
                    <a href="#" className="p-2 rounded-full mx-7 xl:mx-0 bg-[#006699] border-[2px] border-[#006699] text-white flex justify-center xl:p-3 xl:px-9">Read</a>
                    <a className="p-2 rounded-full mx-7 xl:mx-0  border-[2px] border-[#006699] text-[#006699] flex justify-center xl:p-3 xl:px-9">Read</a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>



        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p class="text-xs-center tm-footer-text text-center font-extralight">Copyright &copy; 2016 Company Name</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Columins