import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from '@mui/material/Button';
import './index.scss';

const ButtonComp = ({ icons, onclick, classname, name, style, optionCor }) => {

    const classButton = `button button-${classname}`
    return (
        <Button
            variant="outlined"
            sx={style}
            startIcon={icons}
            onClick={onclick}

            className={classButton}
            css={css`
        background-color: ${optionCor};
        &:hover {
            background-color: ${optionCor} !important;
        }
      `}
        >{name}</Button>
    )
}

export default ButtonComp;