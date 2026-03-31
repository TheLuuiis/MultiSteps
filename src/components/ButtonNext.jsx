import '../css/components/ButtonNext.css';
import ButtonBack from './ButtonBack';

const ButtonNext = ({
    type = 'button',
    form,
    onClick,
    children = 'Next step',
    backTo,
    onBackClick,
    showBack = false,
}) => {
    return (  
        <div className="container__button">
            {showBack ? <ButtonBack to={backTo} onClick={onBackClick} /> : <span></span>}
            <button className="button__next" type={type} form={form} onClick={onClick}>
                {children}
            </button>
        </div>
    );
}
 
export default ButtonNext;