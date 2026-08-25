import React from 'react'
import Wrapper from './Wrapper'
import Form from '../components/ContactInfo/Form'
import Map from '../components/LiveMap/Map'
import "./pages.css"
import Path from '../components/Path/Path'

export default function Contact() {
    return (
        <Wrapper>
            <Path style={{ paddingTop: "100px" }} />
            <div className='contactInfo'>
                <div className='locationDiv'>

                    <Form />
                </div>
                <div className='mapDiv'>

                    <Map />
                </div>

            </div>
        </Wrapper>
    )
}
