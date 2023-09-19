import React from 'react';

import HeaderComponent from './header/HeaderComponent';
import BodyComponent from './body/BodyComponent';
import FooterComponent from './footer/FooterComponent';

const MainComponent = () => {
    return (
        <>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </>
    );
};

export default MainComponent;