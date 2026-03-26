import ButtonNext from '../components/ButtonNext';
import '../css/pages/PersonalInfo.css';

const PersonalInfo = () => {
    return (  
        <div className="container__personal__info">
            <div className="title__form">
                <h2>Personal info</h2>
                <p>
                    Please provide your name, email, address, and phone number.
                </p>
            </div>
            <form action="#" className='container__form'>
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='e.g. Stephen King' />
                </div>
                <div className="inputs">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' placeholder='e.g. Stephenking@lorem.com' />
                </div>
                <div className="inputs">
                    <label htmlFor="phone">Phone number</label>
                    <input type="tel" name='phone' placeholder='e.g. +1 234 567 890' />
                </div>
            </form>
            <ButtonNext />
        </div>
    );
}
 
export default PersonalInfo;