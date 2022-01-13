import React, { Component } from 'react'
import Logo from './ImgFolder/signature-removebg-preview.png';
import Brand from './ImgFolder/brand.png'

export default class footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="brandName">BRANDNAME</div>
                <div className="clothing">CLOTHING</div>
                <img className="iconBrand" src = {Brand} alt='footer-image'/>
                <div className="masore">MASORE</div>
                <img className="sig" src = {Logo} alt='footer-image'/>
            </div>
        )
    }
}
