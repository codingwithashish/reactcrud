import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import TodoModal from './modal/TodoModal';
import AddEmpModal from './modal/AddEmpModal';
const Header = () => {
    return ( <> <header className="container">
        <a href="">Employee Sheet</a>
        <div class="header-btn">
            <Button
                variant="contained"
                color="secondary"
                data-bs-toggle="modal"
                data-bs-target="#todomodal">
                Employee Todo</Button>
            <Button
                variant="contained"
                color="secondary"
                data-bs-toggle="modal"
                className="ms-3"
                data-bs-target="#staticBackdrop">
                <PersonAddIcon className="me-1"/>
                ADD NEW</Button>
        </div>
    </header> < TodoModal/> <AddEmpModal/> </>)
}

export default Header;