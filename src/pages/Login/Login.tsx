import React from 'react'
import style from './Login.module.scss';
import Input from '../../components/Input/Input';
import { validators } from '../../helpers/validation';
import { useRef } from 'react';

const initialValue = {
  username: '',
  email: '',
  password: '',
  rePassword: '',
};

const Login = () => {

  const inputRef = useRef(initialValue)
  const handleSubmit = ()=>{

  }

  const fieldUpdate = (
    fieldName: keyof typeof initialValue,
    value: string
) => {
    inputRef.current[fieldName] = value;
};

  return (
    <div className={style.loginContainer}>
     <h2 className={style.heading}>Please log in</h2> 
     <form onSubmit={handleSubmit} >
     <Input
                label="name"
                placeholder="name"
                name="username"
                handleChange={(value) => fieldUpdate('username', value)}
                valid={()=> validators.username(inputRef.current)}
            />
            <Input
                name="email"
                placeholder="email"
                label="email"
                handleChange={(value) => fieldUpdate('email', value)}
                valid={() => validators.email(inputRef.current)}
            />
      </form> 
    </div>
  )
}

export default Login