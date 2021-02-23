import React from 'react'
import Navbar from './Navbar'
const Base = ({className, title, children}) => {
    return (
        <div>
            <Navbar />
            <div className='heading text-white d-flex justify-content-center'>
                <h4  style={{margin:'50px',}}>{title}</h4>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}
export default Base