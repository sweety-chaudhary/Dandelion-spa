import React from 'react'
import './Work.scss'
import { WorkCard } from './WorkCard'

export const Work= () => {
    const category = [{
        id: 1,
        title: 'painting',
        bg_url: require('../../images/painting.jpg')
    },
    {
        id: 2,
        title: 'card',
        bg_url: require('../../images/card.jpg')
    },
    {
        id: 3,
        title: 'calendar',
        bg_url: require('../../images/calendar.jpg')
    },
    {
        id: 4,
        title: 'bookmark',
        bg_url: require('../../images/bookmark.jpg')
    },
    ]
    return (
        <div className="work-wraper">
            <div className="work-title">
                <h2 className="title">Feature works</h2>
                <p className="sub-title">Made with Passion</p>
                <hr className="hr--small" />
            </div>
            <div className="work-card-wraper">
                { category.map(({title,bg_url,id}) => <WorkCard key={id} title={title} bg_url={bg_url}></WorkCard>) }
            </div>
        </div>
    );
}