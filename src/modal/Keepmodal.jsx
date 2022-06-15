import React, {useState} from 'react';
import {Button} from '@mui/material';
import Createnote from './Createnote';
import Note from './Note';

const Keepmodal = () => {

    const [newData, setnewData] = useState([]);
    const submitForm = (inputval) =>{
        setnewData((prevdata)=>{
            return [...prevdata, inputval];
        })
    }

    const deleteItem = (id) =>{
        console.log(id);

        setnewData( (oldData) =>{
            oldData.filter((currntval, index) =>{
                return index !== id;
            })
        })
    }
    return ( <> <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdrop2"
        aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-uppercase" id="todomodalLabel">EMPLOYEE KEEP NOTE</h5>
                    <Button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></Button>
                </div>
                <Createnote
                addSubmitEvent={submitForm}
                />
                      
                {
                   newData.map( (data, index) =>{
                        return <Note
                            key={index}
                            id={index}
                            title={data.title}
                            desc={data.desc}
                            deleteNote={deleteItem}
                        />
                   })
                }                  

            </div>
        </div>
    </div> </>

    )
}

export default Keepmodal;