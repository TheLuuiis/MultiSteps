import { useNavigate } from 'react-router-dom';
import '../css/components/ButtonBack.css';

const ButtonBack = ({ to, onClick, children = 'Go Back' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (to) {
            navigate(to);
        }
    };

    return (
        <button className="button__back" type="button" onClick={handleClick}>
            {children}
        </button>
    );
}

export default ButtonBack;