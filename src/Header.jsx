import React from 'react';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Header = () => {
    return (
        <header className="container">
            <a href="">Employee Sheet</a>
            <Button
                variant="contained"
                color="secondary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                <PersonAddIcon className="me-1"/>
                ADD NEW</Button>
        </header>
    )
}

export default Header;