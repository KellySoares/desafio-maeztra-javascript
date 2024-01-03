import React from "react";
import Button from '@mui/material/Button';
import './index.scss';

const ButtonComp = ({ icons, onclick, classname, name, style }) => {
    const classButton = `button button-${classname}`
    return (
        <Button
            variant="outlined"
            sx={style}
            startIcon={icons}

            onClick={onclick}

            className={classButton}
        >{name}</Button>
    )
}

export default ButtonComp;