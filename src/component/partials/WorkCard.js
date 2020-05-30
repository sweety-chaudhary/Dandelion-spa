import React from 'react'
import { Link } from 'react-router-dom'
import './WorkCard.scss'

export const WorkCard = (props) => {
    return (
        <div className="work-card-container">
            <div className="card">
                <div className="work-card" style={{backgroundImage: `url(${props.bg_url})` }}>
                    <span className="overlay"></span>
                    <Link to="/">
                        {props.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}