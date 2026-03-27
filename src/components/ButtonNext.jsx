import '../css/components/ButtonNext.css';

const ButtonNext = ({ type = 'button', form }) => {
    return (  
        <div className="container__button">
            <button type={type} form={form}>
                Next step
            </button>
        </div>
    );
}
 
export default ButtonNext;