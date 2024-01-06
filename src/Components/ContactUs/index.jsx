import React from 'react'

function ContactUs() {
    return (
        <div>

            <div id='Con' className="row gray-bg xl:px-[150px] lg:px-7 md:px-4   px-4">

                <section id="tm-section-4" class="tm-section">
                    <h2 class="blue-text tm-title text-center">Contact Us</h2>
                    <div class="tm-container block md:flex lg:flex xl:flex xl:justify-between  xl:gap-[40px] lg:gap-[20px] md:gap-[px]">


                        <div className="xl:w-[65%] lg:w-[70%]  md:60%">
                            <form action="index.html" method="post" class="tm-contact-form">
                                <div className='block md:flex lg:flex xl:flex md:gap-4 lg:gap-4 xl:gap-7 xl:w-full'>
                                    <div class="xl:w-[50%] lg:w-[50%] ">
                                        <input type="text" id="contact_name" name="contact_name" class="form-control xl:w-full lg:w-full w-full" placeholder="Name" required />
                                    </div>
                                    <div class="xl:w-[50%] lg:w-[50%] mt-8 md:mt-0">
                                        <input type="email" id="contact_email" name="contact_email" class="form-control xl:w-full lg:w-full w-full  " placeholder="Email" required />
                                    </div>

                                </div>
                                <div class="xl:mt-8 lg:mt-8 md:mt-8 mt-8 ">
                                    <input type="text" id="contact_subject" name="contact_subject" class="form-control xl:w-full lg:w-full md:w-full w-full" placeholder="Subject" required />
                                </div>
                                <div class="xl:mt-8 lg:mt-8 md:mt-8 mt-8 ">
                                    <textarea id="contact_message" name="contact_message" class="form-control xl:w-full lg:w-full md:w-full w-full" rows="6" placeholder="Message" required></textarea>
                                </div>
                                <div className='flex justify-end'>

                                <button className='WWW text-[18px] mt-3 lg:mt-5 md:mt-4 font-normal text-[#4EA7FF] border-[2px] p-2 px-12  rounded-[30px]  border-[#4EA7FF]'>Preview</button>
                                </div>
                            </form>
                        </div>

                        <div class="xl:w-[35%] lg:w-[40%] mt-8 md:w-[37%]" >
                            <h3 class="light-blue-text tm-subtitle">Etiam at rhoncus nisl</h3>
                            <p className='xl:text-[22px] xl:font-extralight lg:text-[19px] lg:font-extralight lg:mt-6 md:text-[19px] md:font-extralight md:mt-6 text-[21px] font-extralight'>Nunc rutrum ac ante euismod cursus. Suspendisse imperdiet feugiat massa nec iaculis</p>
                            <p className='xl:text-[22px] xl:font-extralight xl:mt-5  lg:text-[19px] lg:font-extralight lg:mt-6  md:text-[19px] md:font-extralight md:mt-6  text-[21px] font-extralight mt-4'>
                                Tel: <a href="tel:0100200340">010-020-0340</a><br />
                                Email: <a href="mailto:info@company.com">info@company.com</a>
                            </p>
                        </div>
                    </div>
                </section>

                <footer class="tm-footer">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p class="text-xs-center tm-footer-text text-center font-extralight ">Copyright &copy; 2016 Company Name</p>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default ContactUs