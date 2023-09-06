import React from 'react';       
import Header from './components/Header';
import NewsCont from './pageCont/NewsCont';
import FooteCont from './pageCont/FooterCont';

// Страница контактов

function AppCont()
{
    return (
        <>
            <Header />
            <NewsCont />
            <FooteCont />
        </>
    )
    
}

export default AppCont;