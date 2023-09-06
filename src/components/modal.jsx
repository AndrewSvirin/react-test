import { useState } from 'react';
import React from 'react';  


function Modal()
{
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");


    return (
        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                <form>
                    {/* поле логина */}
                    <label>Enter your name:
                        <input
                        type="text" 
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        />
                    </label>
                    <label>Enter your name:
                        <input
                        type="password" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        />
                    </label>
                    <div><input className="btn btn-primary" type="submit" value="Зарегистрироваться" /></div>
                </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Modal