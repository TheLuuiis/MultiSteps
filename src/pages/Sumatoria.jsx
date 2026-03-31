import '../css/pages/Sumatoria.css';
import ButtonNext from '../components/ButtonNext';
import { useNavigate } from 'react-router-dom';
import {
    ADD_ON_OPTIONS,
    PLAN_OPTIONS,
    formatPrice,
} from '../data/subscriptionOptions';

const Sumatoria = ({ subscription }) => {
    const navigate = useNavigate();
    const { selectedPlanId, isYearly, selectedAddOnIds } = subscription;
    const billingKey = isYearly ? 'yearly' : 'monthly';
    const billingLabel = isYearly ? 'Yearly' : 'Monthly';
    const totalLabel = isYearly ? 'per year' : 'per month';
    const selectedPlan = PLAN_OPTIONS.find(({ id }) => id === selectedPlanId) ?? PLAN_OPTIONS[0];
    const selectedAddOns = ADD_ON_OPTIONS.filter(({ id }) => selectedAddOnIds.includes(id));
    const planPrice = selectedPlan.prices[billingKey];
    const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + addOn.prices[billingKey], 0);
    const totalPrice = planPrice + addOnsTotal;

    return (  
        <div className="container__sumatoria">
            <div className="title__plan">
                <h2>Finishing up</h2>
                <p>
                    Double-check everything looks OK before confirming.
                </p>
            </div>
            <div className="sumatoria">
                <div className="sum">
                    <div className="description__sum">
                        <h3>{selectedPlan.name} ({billingLabel})</h3>
                        <button type="button" onClick={() => navigate('/step2')}>Change</button>
                    </div>
                    <p>{formatPrice(planPrice, isYearly)}</p>
                </div>
                {selectedAddOns.map(({ id, name, prices }) => (
                    <div className="sum sum__addon" key={id}>
                        <div className="description__sum">
                            <span>{name}</span>
                        </div>
                        <p>+{formatPrice(prices[billingKey], isYearly)}</p>
                    </div>
                ))}
                <div className="sum">
                    <div className="description__sum">
                        <span>Total ({totalLabel})</span>
                    </div>
                    <p className="total__price">+{formatPrice(totalPrice, isYearly)}</p>
                </div>
            </div>
            <ButtonNext backTo="/step3" showBack onClick={() => navigate('/success')}>Confirm</ButtonNext>
        </div>
    );
}
 
export default Sumatoria;