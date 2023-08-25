import React, { useEffect, useState } from 'react';

interface PropsContact {
    name: string,
    number: string,
    email: string,
    type: string,
    message: string
}

interface PropsContactErrors {
    name?: string,
    number?: string,
    email?: string,
    type?: string,
    message?: string
}

const Contact: React.FC = () => {
    const [text, setText]=useState<PropsContact>({
        name: "",
        number: "",
        email: "",
        type: "",
        message: ""
    })
    const [errors, setErrors]=useState<PropsContactErrors>({})
    const [isSubmit, setIsSubmit]=useState<boolean>(false)

    useEffect(() => {
        console.log(errors)
        if(Object.keys(errors).length === 0 && isSubmit) {
            console.log(text)
        }
    },[errors])

    const onFormSubmit=(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors(validate(text))
        setIsSubmit(true)
    }

    const onInputChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value}=e.target
        setText({
            ...text,[name]: value
        })
    }

    const validate=(data: PropsContact): PropsContactErrors => {
        const errors: PropsContactErrors={}
        if(!text.name) {
            errors.name="You must enter a name"
        }
        if(!text.number) {
            errors.number="You must enter a phone number"
        }
        if(!text.email) {
            errors.email="You must enter a email"
        }
        if(!text.type) {
            errors.type="You must enter a type"
        }
        if(!text.message) {
            errors.message="You must enter a message"
        }
        return errors
    }
    return (
        <div className='contact-container'>
            <div className='container'>
                <h4>get in touch</h4>
                {Object.keys(errors).length === 0 && isSubmit ? <div className='submit'>Success! Thank you!</div> : null}
                <form className='form' onSubmit={onFormSubmit}>
                    <input 
                        type='text'
                        placeholder='Enter you name'
                        name='name'
                        value={text.name}
                        onChange={onInputChange}
                    />
                    <p>{errors.name}</p>
                    <input 
                        type='text'
                        placeholder='Enter phone number'
                        name='number'
                        value={text.number}
                        onChange={onInputChange}
                    />
                    <p>{errors.number}</p>
                    <input 
                        type='text'
                        placeholder='Enter email address'
                        name='email'
                        value={text.email}
                        onChange={onInputChange}
                    />
                    <p>{errors.email}</p>
                    <input 
                        type='text'
                        placeholder='Type of cooperation you are interested in'
                        name='type'
                        value={text.type}
                        onChange={onInputChange}
                    />
                    <p>{errors.type}</p>
                    <input 
                        type='text'
                        placeholder='Message'
                        name='message'
                        value={text.message}
                        onChange={onInputChange}
                    />
                    <p>{errors.message}</p>
                    <button className='button1'>submit here</button>
                </form>
            </div>
        </div>
    )
}

export default Contact