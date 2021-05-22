import React from 'react';
import classes from './FormBox.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import Canvas from './Canvas/Canvas';
import { useRef, useEffect, useState } from "react";

const FormBox = () => {
    useEffect(() => {
        button.current.disabled = true;
    }, [])
    const checkbox = useRef();
    const button = useRef();
    const questionInput = useRef();
    const numberInput = useRef();
    const errTypeSpan = useRef();
    const sendQuestion = async (question, num) => {
        let data = {title: question, phone: num.replace(/[-()+]/g, "")}; 
        await fetch('http://localhost:8888/questions', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    const formatTelInputValue = () => {
        let number = numberInput.current.value
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
    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <h3 className={classes.header}>Остались вопросы?</h3>
                <Form>
                    <div className={classes.container}>
                        <Form.Text style={{margin: '15px 0', fontSize: '1rem', color: '#E5DDCD'}}>Оставьте заявку и мы свяжемся с Вами</Form.Text>
                        <div className={classes.inputBox}>
                            <Form.Group controlId="formBasicName">
                                <Form.Control ref={questionInput} style={{ background: '#DACFB9', borderRadius: '50px' }} type="text" placeholder="Ваше Имя" autoComplete = "off" />
                            </Form.Group>
                            <Form.Group controlId="formBasicNum">
                                <Form.Control 
                                    ref={numberInput} 
                                    style={{ background: '#DACFB9', borderRadius: '50px', marginLeft: '20px' }} 
                                    type="tel" 
                                    placeholder="Номер телефона"
                                    autoComplete = "off"
                                    onChange={formatTelInputValue} 
                                />
                            </Form.Group>
                        </div>
                        <span ref={errTypeSpan} className={classes.span}></span>
                        <div className={classes.buttonBlock}>
                            <Form.Group controlId="formBasicCheckbox" >
                                <Form.Check 
                                    onClick={() => checkbox.current.checked ? button.current.disabled = false : button.current.disabled = true } 
                                    ref={checkbox} 
                                    style={{color: '#E5DDCD'}} 
                                    type="checkbox" 
                                    label="Я даю согласие на обработку личных данных" 
                                />
                            </Form.Group>
                            <Button
                                onClick={() =>{ 
                                    if (questionInput.current.value.length != 0 && numberInput.current.value.length != 0 && numberInput.current.value.length === 17) {
                                        sendQuestion(questionInput.current.value, numberInput.current.value)
                                        window.location.reload()
                                    } else {
                                        errTypeSpan.current.innerHTML = 'Введите корректные данные'
                                        errTypeSpan.current.style.display = 'block'
                                    }
                                }}
                                ref={button} 
                                style={{background: '#FFC3E1', color: '#000', padding: '10px 50px',  fontFamily: 'Prosto One', border: 'none', borderRadius: '10px'}} 
                                variant="primary" 
                                >Оставить заявку</Button>
                        </div>
                    </div>
                </Form>
            </div>
            <div className={classes.canvasWrapper}>
                <Canvas />
            </div>
        </div>
    )

}

export default FormBox;