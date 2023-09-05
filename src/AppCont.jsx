import React from 'react';       
import HeaderCont from './pageCont/HeaderCont';
import NewsCont from './pageCont/NewsCont';
import FooteCont from './pageCont/FooterCont';


function AppCont()
{
    return (
        <>
            <HeaderCont />
            <NewsCont />
            <FooteCont />
        </>
    )
    
}

export default AppCont;