import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookSvg } from '../../ui-lib/icon/FacebookSvg'
import { TwitterSvg } from '../../ui-lib/icon/TwitterSvg'
import { PinterestSvg } from '../../ui-lib/icon/PinterestSvg'
import { InstagramSvg } from '../../ui-lib/icon/InstagramSvg'
import { GooglePlusSvg } from '../../ui-lib/icon/GooglePlusSvg'


import './SocialMedia.scss'

export const SocialMedia = () => {
    return (
        <div className="social-media">
            <ul>
                <Link to='/'><li><FacebookSvg></FacebookSvg></li></Link>
                <Link to='/'><li><TwitterSvg></TwitterSvg></li></Link>
                <Link to='/'><li><PinterestSvg></PinterestSvg></li></Link>
                <Link to='/'><li><InstagramSvg></InstagramSvg></li></Link>
                <Link to='/'><li><GooglePlusSvg></GooglePlusSvg></li></Link>
            </ul>
        </div>
    );
}