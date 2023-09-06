import React from 'react';       
import Header from './components/Header';
import NewsInformation from './Inform/NewsInformation';
import FooteInformation from './Inform/FooterInformation';


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