import React, {useState} from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {TextField, Button, Box} from '@mui/material';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';

const TodoModal = () => {
    const [inputval,
        setnewinputval] = useState();
    const [newitem,
        setnewitem] = useState([]);

    const todovalue = (event) => {
        setnewinputval(event.target.value);
    }

    const submitTodoForm = (e) => {
        e.preventDefault();
        setnewitem((prevdata) => {
            return [
                ...prevdata,
                inputval
            ];
        });
        setnewinputval('');
    }

    const deleteIem = (id) => {
        // console.log(`deleted ${id}`);

        setnewitem((prevdata) => {
            return prevdata.filter((newele, index) => {
                return index !== id;
            })
        })
    }
    return ( <> <div
        class="modal fade"
        id="todomodal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="todomodalLabel"
        aria-hidden="true">
        <Box class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-uppercase" id="todomodalLabel">ADD EMPLOYEE TODO</h5>
                    <Button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"></Button>
                </div>
                <form method="POST" onSubmit={submitTodoForm}>
                    <div class="modal-body">
                        <TextField
                            fullWidth
                            label="Add New Item"
                            color="secondary"
                            onChange={todovalue}
                            value={inputval}/>
                        <div className="list-item-wrapper">
                            <ul className="list-unstyled mt-3">
                                {newitem.map((data, index) => {
                                    return ( <> <li
                                        className='list-item d-flex justify-content-between px-2 mb-2'
                                        key={index}
                                        id={index}>
                                        <span>{index + 1} {data}</span>
                                        <div className="action-icon">
                                            {/* <a href=""><ModeEditIcon/></a> */}
                                            <a
                                                href="#"
                                                className="text-danger"
                                                onClick={() => {
                                                deleteIem(index);
                                            }}><DeleteIcon/>
                                            </a>
                                        </div>
                                    </li> </>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <Button type='submit' variant="contained" color="secondary">ADD ITEM
                            <RightArrow/>
                        </Button>
                    </div>
                </form>
            </div>
        </Box>
    </div> </>
    )
}

export default TodoModal;