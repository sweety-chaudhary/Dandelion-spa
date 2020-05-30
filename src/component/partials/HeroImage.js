import React from 'react'
import './HeroImage.scss'
import { Link } from 'react-router-dom'
import { HeroImageSvg } from '../../ui-lib/icon/HeroImageSvg'

export const HeroImage = () => {
    return(
        <div className="hero-image-wraper">
            <div className="main-container clearfix">
                <div className="main-banner">
                   <HeroImageSvg></HeroImageSvg>
                </div>
                <div className="main-content">
                    <h1 className="logo-text">Dandelion</h1>
                    <p className="main-text">"We provide Quantity with best quality at affordable cost and Smiles on the face of our customers and satisfaction in their hearts"</p>
                    <div className="centerer">
                        <div className="button-wrp">
                            <Link className="btn" to="/">Explore</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}