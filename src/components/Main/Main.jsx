import React from 'react';
import classes from './Main.module.css';
import Master from './Master/Master';
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Questions from "./Questions/Questions";
import QuestionsForm from "./QuestionsForm/QuestionsForm";
import Feedback from "./Feedbacks/Feedbacks";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

const Main = () => {
    return (
        <div className={classes.wrapper}>
            <Master />
            <Services />
            <Gallery />
            <Questions />
            <QuestionsForm />
            <Feedback />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main;