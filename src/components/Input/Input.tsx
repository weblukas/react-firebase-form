import {useState} from 'react';
import style from './Input.module.scss'
interface IInput {
    label: string;
    name: string;
    placeholder: string;
    handleChange: (value: string) => void;
    valid?: () => boolean;
}

const Input = ({ label, name, placeholder, handleChange, valid }: IInput) => {
    
    const [isValid, setIsValid] = useState(true)
    const onBlur = ()=>{
        if(valid !== undefined){
            setIsValid(valid())
        }
    }
    return (
        <div>
            <label className={style.label}>
                {label}
                {!isValid && <span> is invalid</span>}
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => handleChange(e.target.value)}
                    onBlur={onBlur}
                    className={style.input}
                />
            </label>
        </div>
    );
};

export default Input;
