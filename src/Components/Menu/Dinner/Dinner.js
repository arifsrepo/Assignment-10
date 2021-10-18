import { Link } from 'react-router-dom';
import Foods from '../../Foods/Foods';
import useFoods from '../../hooks/useFoods';
import './Dinner.css'

const Dinner = () => {
    const foods = useFoods();
    return (
        <>
            <div className="flexer">
                {
                foods.filter(food => food.type === "Dinner").map(final => <Link className="detailsLink" to={`/details/${final.id}`}><Foods key={final.id} food={final}></Foods></Link>)
                }
            </div>
        </>
    );
};

export default Dinner;