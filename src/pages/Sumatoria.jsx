import '../css/pages/Sumatoria.css';
import ButtonNext from '../components/ButtonNext';

const Sumatoria = () => {
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
                        <h3>Advanced (Yearly)</h3>
                        <button>Change</button>
                    </div>
                    <p>
                        $9/mo
                    </p>
                </div>
                <div className="sum">
                    <div className="description__sum">
                        <span>Total (per year)</span>
                    </div>
                    <p>
                        
                    </p>
                </div>
            </div>
            <ButtonNext/>
        </div>
    );
}
 
export default Sumatoria;