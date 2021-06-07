import React from 'react';
import classes from './Contacts.module.css';
import CanvasBeforeCon from "./Canvas-beforeCon/CanvasBeforeCon";
import CanvasAfterCon from "./Canvas-afterCon/CanvasAfterCon";
import ContactsContainer from "./ContactsContainer/ContactsContainer";
import BGIconContainer from "./BGIconContainer/BGIconContainer";

const Contacts = () => {
    return (
        <div className={classes.wrapper} id="contacts">
            <CanvasBeforeCon />
            <ContactsContainer />
            <CanvasAfterCon />
            <BGIconContainer />
        </div>
    )
}

export default Contacts;