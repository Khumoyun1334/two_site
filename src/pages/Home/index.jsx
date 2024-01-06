import React from 'react'

import Navbar from '../../Components/Navbar'
import Cart from '../../Components/Cart'
import ImgC from '../../Components/ImgC'
import ContactUs from '../../Components/ContactUs'

function Home() {
    return (
        <div>
            <Navbar />
            <Cart />
            <ImgC />
            <ContactUs />
        </div>
    )
}

export default Home