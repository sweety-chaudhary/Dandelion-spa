import React from 'react';
import { MainPageLayout } from './layout/MainPageLayout'
import { HeroImage } from './partials/HeroImage'
import { SocialMedia } from './partials/SocialMedia'
import { Work } from './partials/Work'

export const Home = () => {
    return (
        <>
            <MainPageLayout>
                <HeroImage></HeroImage>
                <SocialMedia></SocialMedia>
                <Work></Work>
            </MainPageLayout>
        </>
    );
}