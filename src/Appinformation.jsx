import React from 'react';       
import Header from './components/Header';
import NewsInformation from './Inform/NewsInformation';
import FooteInformation from './Inform/FooterInformation';

// Страница информации о компании "О нас"

function AppInformation()
{
    return (
        <>
            <Header />
            <NewsInformation />
            <FooteInformation />
        </>
    )
    
}

export default AppInformation;