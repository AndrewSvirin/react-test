import React from 'react';

function NewsCont()
{
    return(
        <>
        <div class="container">
        <h1>Наши контакты:</h1>
        <section className='row justify-content-between px-5'>
            <div className='w-25 col-lg-12 mx-3 border'>
            <h2>Почта:</h2>
            <h3>Inventos@mail.ru</h3>
            </div>
        </section>
        </div>

        <div class="container">
            <img src="rhr-logo.png" alt="" />
        </div>
        </>
    )
}

export default NewsCont