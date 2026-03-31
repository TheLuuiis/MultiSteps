import '../css/pages/SeleccionarComplemento.css';
import { useNavigate } from 'react-router-dom';
import ButtonNext from '../components/ButtonNext';
import {
    ADD_ON_OPTIONS,
    formatPrice,
} from '../data/subscriptionOptions';

const SeleccionarComplemento = ({ subscription, setSubscription }) => {
    const navigate = useNavigate();
    const { selectedAddOnIds, isYearly } = subscription;

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/step4');
    };

    const handleAddOnChange = (addOnId) => {
        setSubscription((previousSubscription) => {
            const alreadySelected = previousSubscription.selectedAddOnIds.includes(addOnId);

            return {
                ...previousSubscription,
                selectedAddOnIds: alreadySelected
                    ? previousSubscription.selectedAddOnIds.filter((selectedId) => selectedId !== addOnId)
                    : [...previousSubscription.selectedAddOnIds, addOnId],
            };
        });
    };

    return (  
        <div className="container__select__complement">
            <div className="title__select">
                <h2>Pick add-ons</h2>
                <p>
                    Add-ons help to enhance your gaming experience.
                </p>
            </div>
            <form id="add-ons-form" onSubmit={handleSubmit}>
                <div className="container__complement">
                    {ADD_ON_OPTIONS.map(({ id, name, description, prices }) => (
                        <label className="add" key={id} htmlFor={id}>
                            <div className="info__add">
                                <input
                                    id={id}
                                    type="checkbox"
                                    checked={selectedAddOnIds.includes(id)}
                                    onChange={() => handleAddOnChange(id)}
                                />
                                <div className="description__add">
                                    <h4>{name}</h4>
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <span>+{formatPrice(prices[isYearly ? 'yearly' : 'monthly'], isYearly)}</span>
                        </label>
                    ))}
                </div>
            </form>
            <ButtonNext type="submit" form="add-ons-form" backTo="/step2" showBack />
        </div>
    );
}
 
export default SeleccionarComplemento;