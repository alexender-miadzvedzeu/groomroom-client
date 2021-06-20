import React from 'react';
import classes from './QuestionsForm.module.css';
import CanvasBefore from "./Canvas-before/CanvasBefore";
import CanvasAfter from "./Canvas-after/CanvasAfter";
import FormBox from "./FormBox/FormBox";
import BGIconContainer from "./BGIconGContainer/BGIconContainerG";
import Background from "./Background/Background";
import { useEffect, useState } from "react";

const QuestionsForm = () => {

    const [formBoxHeight, setFormBoxHeight] = useState();

    const getHeight = height => {
        setFormBoxHeight(height);
    }
    
    return (
        <div className={classes.wrapper}>
            <BGIconContainer />
            <CanvasBefore />
            <Background formBoxHeight={formBoxHeight} />
            <CanvasAfter />
            <FormBox getHeight={getHeight} />
        </div>
    )
}

export default QuestionsForm;