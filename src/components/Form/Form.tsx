import React, { FC, useRef } from 'react';
import Input from '../Input/Input';
import style from './Form.module.scss';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase-config';
import { validators } from '../../helpers/validation';

const initialValue = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
};

const Form: FC = () => {
    const formRef = useRef(initialValue);
    const usersCollection = collection(dataBase, 'Users');

    const fieldUpdate = (
        fieldName: keyof typeof initialValue,
        value: string
    ) => {
        formRef.current[fieldName] = value;
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

        const data = formRef.current;
        // const data = {
        //     username: formRef.current.username,
        //     email: formRef.current.email,
        //     password: formRef.current.password,
        //     rePassword: formRef.current.rePassword,
        // };
        addUser(data);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <h2 className={style.formTitle}>Registration</h2>
            <Input
                label="name"
                placeholder="name"
                name="username"
                handleChange={(value) => fieldUpdate('username', value)}
                valid={() => validators.username(formRef.current)}
            />
            <Input
                name="email"
                placeholder="email"
                label="email"
                handleChange={(value) => fieldUpdate('email', value)}
                valid={() => validators.email(formRef.current)}
            />

            <Input
                name="password"
                placeholder="password"
                label="password"
                handleChange={(value) => fieldUpdate('password', value)}
                valid={() => validators.password(formRef.current)}
            />

            <Input
                name="rePassword"
                placeholder="confirm password"
                label="confirm password"
                handleChange={(value) => fieldUpdate('rePassword', value)}
                valid={() => validators.rePassword(formRef.current)}
            />
            <button className={style.btn} type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
