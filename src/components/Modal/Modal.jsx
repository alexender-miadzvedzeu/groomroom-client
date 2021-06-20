import React from 'react';
import classes from './Modal.module.css';
import { useRef, useEffect } from "react";
import proloader from '../../images/proloader.gif';

const Modal = props => {

    const modal = useRef();
    const nameInput = useRef();
    const numberInput =useRef();
    const errTypeSpan = useRef();
    const feedBackTextInput = useRef();
    const button = useRef();
    const preloaderRef = useRef();
    
    useEffect(()=> {
        show();
    },[props.active]);
    
    const show = () => {
        if (props.active) {
            modal.current.classList.add(classes.active);
        } else {
            modal.current.classList.remove(classes.active);
        }
    }

    const sendFeedBack = async () => {
        
        if (nameInput.current.value.length !== 0 && feedBackTextInput.current.value.length !== 0 && numberInput.current.value.length !== 0 && numberInput.current.value.length === 17) {
            let data = {
                name: nameInput.current.value, 
                text: feedBackTextInput.current.value,
                phone: numberInput.current.value.replace(/[-()+]/g, "")
            };
            preloaderRef.current.classList.add(classes.show);
            button.current.disabled = true;
            await fetch(`${process.env.REACT_APP_URL}/feedback`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            preloaderRef.current.classList.remove(classes.show);
            button.current.disabled = false;
            close();
        }
    }

    const formatTelInputValue = () => {
        let number = numberInput.current.value;
        const check = (num) => {
            for (let elem of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                if (num == elem) {
                    return true;
                } 
            }
        }

        switch (number.length) {
            case 1:
                if (check(number[0])) {
                    numberInput.current.value = '+375' + '(' + `${number[0]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '';
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 7:
                if (check(number[6])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')'
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 9:
                if (check(number[8])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')'
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 10:
                if (check(number[9])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 11:
                if (check(number[10])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 12:
                if (check(number[11])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[11]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 14:
                if (check(number[13])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}${number[13]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
                break;
            case 15:
                if (check(number[14])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}${number[13]}` + '-' + `${number[14]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}${number[13]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
            break;
                case 17:
                if (check(number[16])) {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}${number[13]}` + '-' + `${number[15]}${number[16]}`
                    errTypeSpan.current.style.display = 'none'
                } else {
                    numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}${number[13]}` + '-' + `${number[15]}`
                    errTypeSpan.current.innerHTML = 'Введите номер телефона'
                    errTypeSpan.current.style.display = 'block'
                }
            break;
        }
        number.length > 17 ? numberInput.current.value = '+375' + '(' + `${number[5]}${number[6]}` + ')' + `${number[8]}${number[9]}${number[10]}` + '-' + `${number[12]}${number[13]}` + '-' + `${number[15]}${number[16]}` : null
    }

    const close = () => {
        nameInput.current.value = ''
        numberInput.current.value = ''
        feedBackTextInput.current.value = ''
        props.setActive(false);
    }

    return (
        <div className={classes.wrapper} ref={modal} onClick={close} >
            <div className={classes.frame} onClick={e => e.stopPropagation()}>
                <input ref={nameInput} className={classes.name} type="text" placeholder="Ваше Имя" autoComplete="off" />
                <input ref={numberInput} className={classes.phone} type="tel" placeholder="Номер телефона" autoComplete="off" onChange={formatTelInputValue} />
                <span ref={errTypeSpan} className={classes.span}></span>
                <input ref={feedBackTextInput} className={classes.feedBackText} type="text" placeholder="Ваш комментарий..." autoComplete="off" />
                <button ref={button} onClick={sendFeedBack} className={classes.button}>Написать отзыв</button>
            </div>
            <img ref={preloaderRef} className={classes.proloader} src={proloader} alt='proloader'/>
        </div>
    )
}

export default Modal;