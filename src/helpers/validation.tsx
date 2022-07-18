interface IInitialValue {
    username: string
    email: string
    password: string
    rePassword: string 
}

const initialValue = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
};


export const validation = (value: IInitialValue ) => {
  let errors = {}
}

