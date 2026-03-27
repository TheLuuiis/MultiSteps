import ButtonNext from '../components/ButtonNext';
import '../css/pages/PersonalInfo.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PersonalInfo = () => {

    const navigate = useNavigate();


    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9\s()-]{7,20}$/;

        if (!form.name.trim()) {
            newErrors.name = 'This field is required';
        } else if(form.name.trim().length < 3) {
            newErrors.name = 'Name must have at least 3 characters';
        };

        if (!form.email.trim()) {
            newErrors.email = 'This field is required';
        } else if(!emailRegex.test(form.email.trim())) {
            newErrors.email = 'Enter a valid email';
        };

        if (!form.phone.trim()) {
            newErrors.phone = 'This field is required';
        } else if(!phoneRegex.test(form.phone.trim())) {
            newErrors.phone = 'Enter a valid phone';
        };

        // Manejamos los erroes
        setErrors({
            name: newErrors.name || '',
            email: newErrors.email || '',
            phone: newErrors.phone || '',
        });

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            navigate('/step2');
        };
    };

    return (  
        <div className="container__personal__info">
            <div className="title__form">
                <h2>Personal info</h2>
                <p>
                    Please provide your name, email, address, and phone number.
                </p>
            </div>
            <form 
                id="personal-info-form"
                className='container__form'
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="inputs">
                    <div className="label__row">
                        <label htmlFor="name">Name</label>
                        {errors.name && <span className="error__text">{errors.name}</span>}
                    </div>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="e.g. Stephen King"
                        value={form.name}
                        onChange={handleChange}
                        className={errors.name ? 'input__error' : ''}
                    />
                </div>
                <div className="inputs">
                    <div className="label__row">
                        <label htmlFor="email">Email address</label>
                        {errors.email && <span className="error__text">{errors.email}</span>}
                    </div>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={form.email}
                        onChange={handleChange}
                        className={errors.email ? 'input__error' : ''}
                    />
                </div>
                <div className="inputs">
                    <div className="label__row">
                        <label htmlFor="phone">Phone number</label>
                        {errors.phone && <span className="error__text">{errors.phone}</span>}
                    </div>

                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={form.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'input__error' : ''}
                    />
                </div>
            </form>
            <ButtonNext type="submit" form="personal-info-form" />
        </div>
    );
}
 
export default PersonalInfo;