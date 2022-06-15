import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HdrPlus from '@mui/icons-material/HdrPlus';
import TodoModal from './modal/TodoModal';
import AddEmpModal from './modal/AddEmpModal';
import {Link, Button} from '@mui/material';
import Keepmodal from './modal/Keepmodal';

const Header = () => {
    return ( <> <header className="container">
        <Link href="">Employee Sheet</Link>
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
            <Button
                variant="contained"
                color="secondary"
                data-bs-toggle="modal"
                className="ms-3"
                data-bs-target="#staticBackdrop2">
                <HdrPlus className="me-1"/>
                EMPLOYEE KEEP</Button>

        </div>
    </header> < TodoModal /> <AddEmpModal/> < Keepmodal /> </>)
}

export default Header;