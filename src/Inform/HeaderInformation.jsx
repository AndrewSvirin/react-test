import React from 'react';  
import ModalInformation from './modalInformation';



function HeaderInformation()
{
    let buttonReg = false

    function reg()
    {
        buttonReg = !buttonReg
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="javascript:void(0)">
                    <img src='rhr-logo.png' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="cont.html">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="button">Search</button>
                </form>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open modal</button>
                </div>
            </div>

            <ModalInformation />
        </nav>

        
    )
}

export default HeaderInformation