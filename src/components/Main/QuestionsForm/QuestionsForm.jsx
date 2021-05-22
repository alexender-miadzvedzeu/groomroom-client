import React from 'react';
import classes from './QuestionsForm.module.css';
import CanvasBefore from "./Canvas-before/CanvasBefore";
import CanvasAfter from "./Canvas-after/CanvasAfter";
import FormBox from "./FormBox/FormBox";
import BGIconContainer from "./BGIconGContainer/BGIconContainerG";

const QuestionsForm = () => {
    return (
        <div className={classes.wrapper}>
            <CanvasBefore />
            <FormBox />
            <CanvasAfter />
            <BGIconContainer />
        </div>
    )
}

export default QuestionsForm;