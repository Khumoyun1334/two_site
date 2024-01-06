import React from 'react'

function CArtStyle({img, title, status}) {
    return (
        <div>
            <div>
                <div className='pt-[60px]'>
                    <div className="scroll-mx-2 md:mx-[70px] mx-5 lg:mx-[100px] 2xl:mx-[160px] bg-white shadow-md overflow-hidden md:max-w-full">
                        <div className={`block ${status ? 'flex-row-reverse' : 'flex-row'} lg:flex`}>
                            <div className="md:shrink-0 lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
                                <img className='md:w-full lg:w-[100%] lg:h-full' src={img} alt="" />
                            </div>
                            <div className="p-8 lg:w-[50%] xl:w-[50%] 2xl:w-[50%] ">
                                <div className=" text-[28px] font-extralight lg:text-[26px] xl:text-[35px] md:text-[31px]">{title}</div>
                                <p className="block text-[19px] px-0 mt-2  font-extralight lg:text-[16px] xl:text-[20px] md:text-[21px]" >Lumino theme is a Bootstrap 4.0 mobile compatible layout for  your website. Check "columns" page for one, two, three  columns and tables.</p>
                                <div className='flex justify-end'>
                                <button className='WWW text-[18px] mt-3 lg:mt-5 md:mt-4 font-normal text-[#4EA7FF] border-[2px] p-2 px-12  rounded-[30px]  border-[#4EA7FF]'>Preview</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CArtStyle