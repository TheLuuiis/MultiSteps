import '../css/pages/SeleccionarComplemento.css';

    const adds = [
        {id: 1,name: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo'},
        {id: 2,name: 'Larger storage', description: 'Extra 1TB cloud save', price: '+$2/mo'},
        {id: 3,name: 'Customizable profile', description: 'Custom theme on your profile', price: '+$2/mo'}
    ];

const SeleccionarComplemento = () => {

    return (  
        <div className="container__select__complement">
            <div className="title__select">
                <h2>Pick add-ons</h2>
                <p>
                    Add-ons help to enhance your gaming experience.
                </p>
            </div>
            <div className="container__complement">
                {adds.map(({id, name, description, price}) => (
                    <div className="add" key={id}>
                        <div className="info__add">
                            <input type="checkbox" />
                            <div className="description__add">
                                <h4>{name}</h4>
                                <p>
                                    {description}
                                </p>
                            </div>
                        </div>
                        <span>{price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default SeleccionarComplemento;