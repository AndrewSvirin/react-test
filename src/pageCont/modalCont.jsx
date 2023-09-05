import { useState } from 'react';
import React from 'react';  


function ModalCont()
{
    const [name, setName] = useState("");

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
                    <label>Enter your name:
                        <input
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

export default ModalCont