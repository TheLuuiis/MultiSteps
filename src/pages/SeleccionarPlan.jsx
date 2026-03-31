import '../css/pages/SeleccionarPlan.css';
import IconArcade  from '../assets/images/icon-arcade.svg';
import IconAdvanced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';
import ButtonNext from '../components/ButtonNext';
import { useNavigate } from 'react-router-dom';
import {
    PLAN_OPTIONS,
    formatPrice,
} from '../data/subscriptionOptions';

const planIcons = {
    arcade: IconArcade,
    advanced: IconAdvanced,
    pro: IconPro,
};

const SeleccionarPlan = ({ subscription, setSubscription }) => {
    const navigate = useNavigate();
    const { selectedPlanId, isYearly } = subscription;

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/step3');
    };

    const handlePlanChange = (event) => {
        setSubscription((previousSubscription) => ({
            ...previousSubscription,
            selectedPlanId: event.target.value,
        }));
    };

    const handleBillingChange = (event) => {
        setSubscription((previousSubscription) => ({
            ...previousSubscription,
            isYearly: event.target.checked,
        }));
    };

    return (  
        <div className="container__select__plan">
            <div className="title__plan">
                <h2>Select your plan</h2>
                <p>
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <form id="select-plan-form" onSubmit={handleSubmit}>
                <div className="container__plans">
                    {PLAN_OPTIONS.map(({ id, name, prices }) => (
                        <div className="plan" key={id}>
                            <input
                                type="radio"
                                id={id}
                                name="plan"
                                value={id}
                                checked={selectedPlanId === id}
                                onChange={handlePlanChange}
                            />
                            <label htmlFor={id}>
                                <img width="40" height="40" src={planIcons[id]} alt={`icon-${id}`} />
                                <div className="details">
                                    <h4>{name}</h4>
                                    <p>
                                        {formatPrice(prices[isYearly ? 'yearly' : 'monthly'], isYearly)}
                                    </p>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="container__duration">
                    <div className="duration">
                        <h5 className={!isYearly ? 'duration__label active' : 'duration__label'}>Monthly</h5>
                        <label className="switch">
                            <input type="checkbox" checked={isYearly} onChange={handleBillingChange} />
                            <span className="slider"></span>
                        </label>
                        <h5 className={isYearly ? 'duration__label active' : 'duration__label'}>Yearly</h5>
                    </div>
                </div>
            </form>
            <ButtonNext type="submit" form="select-plan-form" backTo="/" showBack />
        </div>
    );
}
 
export default SeleccionarPlan;