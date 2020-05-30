import React from 'react'
import { Header } from '../partials/Header'
import { Footer } from '../partials/footer'

import './MainPageLayout.scss'

export const MainPageLayout = (props) => {
    return (
        <div className="wraper">
            <div className="container">
                <Header></Header>
                {props.children}
                <Footer></Footer>
            </div>
        </div>
    );
}