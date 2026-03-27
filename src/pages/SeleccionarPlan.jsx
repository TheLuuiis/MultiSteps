import '../css/pages/SeleccionarPlan.css';
import IconArcade  from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';
import ButtonNext from '../components/ButtonNext';

const SeleccionarPlan = () => {
    return (  
        <div className="container__select__plan">
            <div className="title__plan">
                <h2>Select your plan</h2>
                <p>
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <form>
                <div className="container__plans">
                    <div className="plan">
                        <input type="radio" id="arcade" name="plan" />
                        <label htmlFor="arcade">
                            <img width='40px' height='40px' src={IconArcade} alt="icon-arcade" />
                            <div className="details">
                                <h4>Arcade</h4>
                                <p>
                                    $9/mo
                                </p>
                            </div>
                        </label>
                    </div>
                    <div className="plan">
                        <input type="radio" id="arcade" name="plan" />
                        <label htmlFor="arcade">
                            <img width='40px' height='40px' src={IconAdvanced} alt="icon-arcade" />
                            <div className="details">
                                <h4>Advanced</h4>
                                <p>
                                    $12/mo
                                </p>
                            </div>
                        </label>
                    </div>
                    <div className="plan">
                        <input type="radio" id="arcade" name="plan" />
                        <label htmlFor="arcade">
                            <img width='40px' height='40px' src={IconPro} alt="icon-arcade" />
                            <div className="details">
                                <h4>Pro</h4>
                                <p>
                                    $15/mo
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="container__duration">
                    <div className="duration">
                        <h5>Monthly</h5>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <h5>Yearly</h5>
                    </div>
                </div>
            </form>
            <ButtonNext type="submit" form="personal-info-form" />
        </div>
    );
}
 
export default SeleccionarPlan;