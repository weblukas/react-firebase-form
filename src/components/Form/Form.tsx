import React, { FC, useCallback, useRef } from 'react';
import Input from '../Input/Input';
import style from './Form.module.scss';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase-config';

const initialValue = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
};

const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form: FC = () => {
    const formRef = useRef(initialValue);
    const usersCollection = collection(dataBase, 'Users');

    const fieldUpdate = (
        fieldName: keyof typeof initialValue,
        value: string
    ) => {
        formRef.current[fieldName] = value;
    };

    console.log(formRef.current.username);

    const validators = {
        username: () => formRef.current.username.length > 4,
        email: () => emailValidation.test(formRef.current.email),
        password: () => formRef.current.password.length >= 8,
        rePassword: () =>
            formRef.current.password === formRef.current.rePassword,
    };

    const addUser = async (userData: any) => {
        await addDoc(usersCollection, {
            username: userData.username,
            email: userData.email,
            password: userData.password,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            username: formRef.current.username,
            email: formRef.current.email,
            password: formRef.current.password,
            rePassword: formRef.current.rePassword,
        };

        addUser(data);
    };

    //     const handleSubmit = useCallback
    //    (()=> (e: React.FormEvent<HTMLFormElement>)=>{
    //         e.preventDefault()

    //         const data = {
    //             username: formRef.current.username,
    //             email: formRef.current.email,
    //             password: formRef.current.password,
    //             rePassword: formRef.current.rePassword,
    //         }
    //         console.log(data);
    //     },[])

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <h2 className={style.formTitle}>Registration</h2>
            <Input
                label="name"
                placeholder="name"
                name="username"
                handleChange={(value) => fieldUpdate('username', value)}
                valid={validators.username}
            />
            <Input
                name="email"
                placeholder="email"
                label="email"
                handleChange={(value) => fieldUpdate('email', value)}
                valid={validators.email}
            />

            <Input
                name="password"
                placeholder="password"
                label="password"
                handleChange={(value) => fieldUpdate('password', value)}
                valid={validators.password}
            />

            <Input
                name="rePassword"
                placeholder="rePassword"
                label="rePassword"
                handleChange={(value) => fieldUpdate('rePassword', value)}
                valid={validators.rePassword}
            />
            <button className={style.btn} type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
