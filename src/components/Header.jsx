import React from 'react';  
import Modal from './modal';

// Функция создания header

function Header()
{
    return (

        // Меню навигации по сайту с использованием роутера
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Главная</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">О нас</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contact">Контакты</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="button">Search</button>
                </form>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open modal</button>
                </div>
            </div>

            <Modal />
        </nav>

        
    )
}

export default Header