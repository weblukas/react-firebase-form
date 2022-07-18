interface IFormValues {
    username: string;
    email: string;
    password: string;
    rePassword: string;
}

type IValidator = (formValues: IFormValues) => boolean;

interface IValidators {
    username: IValidator;
    email: IValidator;
    password: IValidator;
    rePassword: IValidator;
    [key: string]: IValidator;
}

const emailValidation =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
export const validators: IValidators = {
    username: (formValues) =>
    formValues.username.length > 4,
    email: (formValues) => emailValidation.test(formValues.email),
    password: (formValues) => formValues.password.length >= 8,
    rePassword: (formValues) =>
    formValues.password === formValues.rePassword,
};
